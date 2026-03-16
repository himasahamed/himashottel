import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import bakeImage from "../assets/images/bake-house-items.png";
import breakfastImage from "../assets/images/string-hoppers-and-coconut.jpg";
import teaImage from "../assets/images/tea.jpg";
import parottaImage from "../assets/images/parotta.jpg";
import beefRottiImage from "../assets/images/beef-rotti.jpg";
import shortEatsImage from "../assets/images/short-eats.jpg";

function Home() {
  return (
    <div>
      <Helmet>
        <title>Himas Hotel & Bake House | Bakery, Breakfast and Tea in Palamunai</title>
        <meta
          name="description"
          content="Himas Hotel & Bake House in Palamunai offers fresh bakery items, breakfast, tea, short eats, and friendly service every day."
        />
      </Helmet>

      <Hero />

      <section className="section">
        <div className="section-heading">
          <span>Our Special Categories</span>
          <h2>Fresh Food Made for Every Part of Your Day</h2>
          <p>
            From early morning breakfast to fresh bakery items and hot tea, we
            serve tasty food with care.
          </p>
        </div>

        <div className="card-container">
          <div className="card">
            <img src={bakeImage} alt="Bake house products" className="card-img" />
            <h3>Bake House Items</h3>
            <p>Fresh buns, bread, rolls, patties, cakes, and more bakery favorites.</p>
          </div>

          <div className="card">
            <img src={breakfastImage} alt="Morning breakfast" className="card-img" />
            <h3>Morning Breakfast</h3>
            <p>Start your day with tasty breakfast items prepared fresh for our customers.</p>
          </div>

          <div className="card">
            <img src={teaImage} alt="Tea and snacks" className="card-img" />
            <h3>Tea and Snacks</h3>
            <p>Hot tea, coffee, and tasty snacks for a relaxing break at any time.</p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-heading">
          <span>Popular Items</span>
          <h2>Customer Favorite Foods</h2>
        </div>

        <div className="mini-card-container">
          <div className="mini-card">
            <img src={parottaImage} alt="Parotta" className="mini-card-img" />
            <h4>Parotta</h4>
          </div>

          <div className="mini-card">
            <img src={beefRottiImage} alt="Beef rotti" className="mini-card-img" />
            <h4>Beef Rotti</h4>
          </div>

          <div className="mini-card">
            <img src={shortEatsImage} alt="Short eats" className="mini-card-img" />
            <h4>Short Eats</h4>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="why-grid">
          <div className="why-card">
            <h3>Fresh Every Day</h3>
            <p>We prepare food daily to give our customers better taste and quality.</p>
          </div>

          <div className="why-card">
            <h3>Affordable Prices</h3>
            <p>Our menu is made to be budget-friendly while keeping good quality.</p>
          </div>

          <div className="why-card">
            <h3>Friendly Service</h3>
            <p>We welcome customers with warm service and a comfortable atmosphere.</p>
          </div>

          <div className="why-card">
            <h3>Easy to Reach</h3>
            <p>Located at Main Street, Palamunai-3, making it easy for local customers.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;