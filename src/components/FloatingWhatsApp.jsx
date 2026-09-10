import React, { useState } from 'react';
import { Icon } from './Icons';

export const FloatingWhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const predefinedMessages = [
    "Hi! Is there room availability for this week?",
    "Hello! What are your rates for the Deluxe Garden Room?",
    "Hi, do you offer airport pickup from Colombo (CMB)?"
  ];

  const handleSendMessage = (msg) => {
    const url = `https://wa.me/94777778853?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="floating-whatsapp-wrapper">
      {isOpen && (
        <div className="whatsapp-popup-card">
          <div className="whatsapp-popup-header">
            <div className="host-avatar-online">
              <span className="avatar-letter">S</span>
              <span className="online-indicator"></span>
            </div>
            <div className="whatsapp-popup-info">
              <h4>Simlaya Inn Concierge</h4>
              <p>Typically replies within minutes</p>
            </div>
            <button
              className="whatsapp-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat popup"
            >
              <Icon name="x" size={16} />
            </button>
          </div>

          <div className="whatsapp-popup-body">
            <p className="popup-greeting">
              Ayubowan! 🙏 Welcome to Simlaya Inn Hikkaduwa. How can we assist your stay today?
            </p>
            <div className="quick-replies">
              {predefinedMessages.map((text, idx) => (
                <button
                  key={idx}
                  className="quick-reply-btn"
                  onClick={() => handleSendMessage(text)}
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          <div className="whatsapp-popup-footer">
            <button
              className="btn btn-whatsapp btn-block"
              onClick={() => handleSendMessage("Hello Simlaya Inn, I would like to inquire about booking a room.")}
            >
              <Icon name="whatsapp" size={18} />
              <span>Start WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        className="floating-whatsapp-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open WhatsApp Chat with Simlaya Inn Host"
      >
        <Icon name="whatsapp" size={28} />
        <span className="whatsapp-pulse"></span>
        <span className="floating-btn-tooltip">Chat with Host</span>
      </button>
    </div>
  );
};
