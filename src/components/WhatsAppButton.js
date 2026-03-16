function WhatsAppButton() {
    const phoneNumber = "94757181903";
  
    return (
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="whatsapp-button"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp Us
      </a>
    );
  }
  
  export default WhatsAppButton;