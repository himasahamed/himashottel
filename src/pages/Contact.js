import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="page">
      <Helmet>
        <title>Contact Us | Himas Hotel & Bake House</title>
        <meta
          name="description"
          content="Contact Himas Hotel & Bake House in Palamunai for bakery items, breakfast, tea, snacks, and location details."
        />
      </Helmet>

      <div className="page-banner">
        <h1>Contact Us</h1>
        <p>Visit us, call us, or find us easily on Google Maps.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p><strong>Phone:</strong> 0672255339</p>
          <p><strong>WhatsApp:</strong> 0757181903</p>
          <p><strong>Address:</strong> 96A Main Street, Palamunai-3</p>
          <p><strong>Opening Hours:</strong> 3.30 AM - 10.00 PM</p>

          <a
            href="https://maps.app.goo.gl/PNoFutmzRjkXdjSq9"
            target="_blank"
            rel="noreferrer"
            className="map-link"
          >
            View on Google Maps
          </a>
        </div>

        <div className="contact-map">
          <iframe
            title="Himas Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.3078797110392!2d81.84822426521976!3d7.274596567969598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae51302c8ba6e15%3A0x4686ae65e30725d9!2sHIMAS%20HOTEL%20%26%20GROCERY!5e0!3m2!1sen!2slk!4v1773567980977!5m2!1sen!2slk"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;