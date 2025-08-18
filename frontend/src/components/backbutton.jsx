import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: 'fixed',
        top: 24,
        left: 24,
        zIndex: 50,
        background: '#FFF5E9',
        border: 'none',
        borderRadius: '50%',
        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
        width: 56,
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'box-shadow 0.2s',
      }}
      aria-label="Go back"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={32}
        height={32}
        viewBox="0 0 24 24"
        fill="none"
        stroke="#2D3748"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="15 19 8 12 15 5" />
      </svg>
    </button>
  );
};

export default BackButton;