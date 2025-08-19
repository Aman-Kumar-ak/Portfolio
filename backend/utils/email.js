const nodemailer = require('nodemailer');

// Create transporter with fallback for different Nodemailer versions
const createTransporter = () => {
  // Check if environment variables are set
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error('Missing email environment variables: EMAIL_USER or EMAIL_PASS');
  }
  
  // Handle different Nodemailer versions
  const createTransportMethod = nodemailer.createTransport || nodemailer.createTransporter;
  
  if (!createTransportMethod) {
    throw new Error('Nodemailer createTransport method not found. Please check Nodemailer installation.');
  }
  
  return createTransportMethod({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Send email function
const sendEmail = async (emailData) => {
  try {
    const transporter = createTransporter();
    
    const mailOptions = {
      from: `"${emailData.name} <${emailData.email}>"`,
      to: process.env.EMAIL_TO,
      replyTo: emailData.email,
      subject: `Portfolio Contact: ${emailData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Message from Portfolio</h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${emailData.name}</p>
            <p><strong>Email:</strong> ${emailData.email}</p>
            <p><strong>Subject:</strong> ${emailData.subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 5px; margin-top: 10px;">
              ${emailData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="color: #666; font-size: 14px;">
            This message was sent from your portfolio website contact form.
          </p>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 14px;">
            <strong>Reply directly to:</strong> ${emailData.email}
          </p>
        </div>
      `
    };

    const result = await transporter.sendMail(mailOptions);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email sending failed:', error);
    console.error('Environment check:', {
      EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Missing',
      EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Missing',
      EMAIL_TO: process.env.EMAIL_TO ? 'Set' : 'Missing'
    });
    console.error('Nodemailer check:', {
      nodemailerType: typeof nodemailer,
      createTransport: typeof nodemailer.createTransport,
      createTransporter: typeof nodemailer.createTransporter,
      nodemailerKeys: Object.keys(nodemailer)
    });
    return { success: false, error: error.message };
  }
};

module.exports = { sendEmail };
