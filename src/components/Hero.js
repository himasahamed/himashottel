import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-simple">
        <div className="hero-top-row">
          <span className="hero-badge">Fresh Food • Breakfast • Bakery • Tea</span>
          <span className="hero-offer">Open Daily • 3.30 AM – 10.00 PM</span>
        </div>

        <h1>Himas Hotel & Bake House</h1>

        <p>
          Enjoy fresh bakery products, tasty breakfast, hot tea, and short eats
          every day in Palamunai.
        </p>

        <div className="hero-buttons">
          <Link to="/menu" className="primary-btn">
            Explore Menu
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Us
          </Link>

          <a
            href="https://wa.me/94757181903"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-hero-btn"
          >
            WhatsApp Order
          </a>
        </div>

        <div className="hero-info-strip">
          <div className="hero-info-box">
            <h4>Fresh Daily</h4>
            <p>Bakery items and breakfast made fresh every day.</p>
          </div>

          <div className="hero-info-box">
            <h4>Easy Contact</h4>
            <p>Call us or order quickly through WhatsApp.</p>
          </div>

          <div className="hero-info-box">
            <h4>Location</h4>
            <p>96A Main Street, Palamunai-3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;