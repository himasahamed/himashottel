import { Helmet } from "react-helmet-async";
import bakeImage from "../assets/images/bake-house-items.png";
import breakfastImage from "../assets/images/string-hoppers-and-coconut.jpg";
import teaImage from "../assets/images/tea.jpg";
import parottaImage from "../assets/images/parotta.jpg";
import beefRottiImage from "../assets/images/beef-rotti.jpg";
import rollsImage from "../assets/images/rolls-and-cutlet-corner.jpg";
import pittuImage from "../assets/images/pittu.jpg";
import appamImage from "../assets/images/appam.jpg";
import breadImage from "../assets/images/bread.jpg";

function Menu() {
  return (
    <div className="page">
      <Helmet>
        <title>Menu | Himas Hotel & Bake House</title>
        <meta
          name="description"
          content="View the menu of Himas Hotel & Bake House in Palamunai including bakery items, breakfast, tea, snacks, and short eats."
        />
      </Helmet>

      <div className="page-banner">
        <h1>Our Menu</h1>
        <p>Explore some of the fresh and tasty items available at our shop.</p>
      </div>

      <div className="menu-grid">
        <div className="menu-card">
          <img src={bakeImage} alt="Bake house items" className="menu-img" />
          <h3>Bake House Items</h3>
          <p>Bread, buns, cakes, patties, rolls, and other fresh bakery products.</p>
        </div>

        <div className="menu-card">
          <img src={breakfastImage} alt="Breakfast" className="menu-img" />
          <h3>Breakfast Items</h3>
          <p>Appam, string hoppers, roti, curry, and other fresh breakfast meals.</p>
        </div>

        <div className="menu-card">
          <img src={teaImage} alt="Tea and drinks" className="menu-img" />
          <h3>Tea and Drinks</h3>
          <p>Milk tea, plain tea, coffee, and cool drinks for all times of the day.</p>
        </div>

        <div className="menu-card">
          <img src={parottaImage} alt="Parotta" className="menu-img" />
          <h3>Parotta</h3>
          <p>Hot and soft parotta served fresh for breakfast or evening meals.</p>
        </div>

        <div className="menu-card">
          <img src={beefRottiImage} alt="Beef rotti" className="menu-img" />
          <h3>Beef Rotti</h3>
          <p>Tasty and filling beef rotti prepared as a satisfying short eat.</p>
        </div>

        <div className="menu-card">
          <img src={rollsImage} alt="Rolls and cutlet" className="menu-img" />
          <h3>Rolls and Cutlet</h3>
          <p>Popular snack items made for quick bites and tea-time enjoyment.</p>
        </div>

        <div className="menu-card">
          <img src={pittuImage} alt="Pittu" className="menu-img" />
          <h3>Pittu</h3>
          <p>Fresh and delicious pittu served as a traditional breakfast favorite.</p>
        </div>

        <div className="menu-card">
          <img src={appamImage} alt="Appam" className="menu-img" />
          <h3>Appam</h3>
          <p>Soft and tasty appam prepared fresh and served warm for breakfast.</p>
        </div>

        <div className="menu-card">
          <img src={breadImage} alt="Bread" className="menu-img" />
          <h3>Bread</h3>
          <p>Freshly baked bread made daily and perfect for breakfast or tea time.</p>
        </div>
      </div>
    </div>
  );
}

export default Menu;