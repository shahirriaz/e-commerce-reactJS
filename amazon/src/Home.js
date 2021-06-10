import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="5699987"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={1}
          />
          <Product
            id="49394494"
            title="Kenwood KMM021 7QT Chef Titanium Kitchen Machine"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81tCWi0BusL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="49394494"
            title="Kenwood KMM021 7QT Chef Titanium Kitchen Machine"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81tCWi0BusL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="89888547"
            title="Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Twilight Blue"
            price={89.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="98896398"
            title="2020 Apple iPad (10.2-inch, Wi-Fi, 128GB) - Space Gray (8th Generation)"
            price={590.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71NaE016p7L._AC_SY679_.jpg"
            rating={4}
          />
          <Product
            id="8874669"
            title="Smart Watch 2020 New Model, Men’s and Women’s Fitness Tracker, Blood Pressure Monitor, Blood oximeter"
            price={400.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71PFcrcMJZL._AC_SX522_.jpg"
            rating={2}
          />
        </div>

        <div className="home__row">
          <Product
            id="88746569"
            title="Hisense 40-Inch Class H4 Series LED Roku Smart TV with Alexa Compatibility (40H4F, 2020 Model)"
            price={1200.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71gzlKauNQL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
