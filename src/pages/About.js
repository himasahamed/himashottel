import { Helmet } from "react-helmet-async";

function About() {
  return (
    <div className="page">
      <Helmet>
        <title>About Us | Himas Hotel & Bake House</title>
        <meta
          name="description"
          content="Learn about Himas Hotel & Bake House, a local bakery and breakfast shop in Palamunai serving fresh food, tea, and short eats."
        />
      </Helmet>

      <div className="page-banner">
        <h1>About Us</h1>
        <p>
          A local place in Palamunai where customers enjoy fresh bakery items,
          breakfast, tea, and tasty short eats every day.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <h3>Who We Are</h3>
          <p>
            Himas Hotel and Bake House is a local food business serving fresh and
            delicious food for families, workers, and daily customers in Palamunai.
          </p>
        </div>

        <div className="about-card">
          <h3>What We Serve</h3>
          <p>
            We offer bakery products, breakfast, tea, short eats, and other tasty
            foods prepared to suit our customers’ daily needs.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Goal</h3>
          <p>
            Our goal is to provide tasty food, good service, fair prices, and a
            welcoming experience for everyone who visits us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;