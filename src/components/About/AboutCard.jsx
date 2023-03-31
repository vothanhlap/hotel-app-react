import React from "react";
import { About } from "../../images";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          
          <h4><i class="fas fa-address-card"></i> About Us</h4>
          <h1>
            We <span>provide Solution </span> to grow your business
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eos
            libero excepturi laudantium quaerat placeat, quia saepe esse quos
            nemo. Dolorum fuga laudantium dolorem commodi maxime a perspiciatis
            quasi quas.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            corrupti, pariatur unde, alias magnam minus iure, minima vitae id
            impedit harum iusto expedita accusantium rem ratione facilis
            reiciendis facere velit?
          </p>
          <div className="secondary-btn">
            <a href="/about"><span></span> Explore More <i className="fas fa-long-arrow-alt-right"></i></a>
          </div>
        </div>
        <div className="row image">
          <img src={About} alt="" />
          <div className="control-btn">
            <button className="prev">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
