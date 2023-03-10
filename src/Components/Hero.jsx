import React from "react";
import Button from "./Button";
import "./Hero.css";
import "../App.css";

function Hero() {
  return (
    <div className="hero-container">
      <h1>
        ADVENTURE<span className="highlighter"> AWAITS</span>
      </h1>
      <p>
        What are You waiting
      </p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Hero;
