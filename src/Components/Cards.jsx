import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

// assets
import img_1 from "../assets/images/img_1.jpg";
import img_2 from "../assets/images/img-2.jpg";
import img_3 from "../assets/images/img-3.jpg";
import img_4 from "../assets/images/img-4.jpg";
import img_5 from "../assets/images/img-5.jpg";
import img_6 from "../assets/images/img-6.jpg";
import img_7 from "../assets/images/img-7.jpg";
import img_8 from "../assets/images/img-8.jpg";
import img_9 from "../assets/images/img-9.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img_9}
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img_2}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img_3}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={img_4}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={img_5}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
