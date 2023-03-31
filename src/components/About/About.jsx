import React from "react";
import HeadTile from "../../common/HeadTile/HeadTile";
import { Features } from "../../images";
import "./About.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <>
    <HeadTile/>
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>
      <section className="features top">
        <div className="conttainer aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Features</span>
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe
              possimus ipsam provident. Possimus consectetur itaque hic, animi
              deserunt quis, veniam porro maxime ad ea quidem eos placeat nihil.
              Eum, maxime.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              repellendus nemo nesciunt earum aperiam voluptatum distinctio
              inventore! Fugiat, ea impedit reprehenderit, ad in eveniet unde
              mollitia, perspiciatis quibusdam voluptate ipsam.
            </p>
            <div className="secondary-btn">
            <a href="/about"><span></span> Explore More <i className="fas fa-long-arrow-alt-right"></i></a>
          </div>
          </div>
          <div className="row image">
            <img src={Features} alt="" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
