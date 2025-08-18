module.exports = (req, res) => {
	res.status(200).json({ ok: true, message: 'Health OK', timestamp: Date.now() })
}
