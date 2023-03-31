import React, { useEffect, useState } from "react";
import "./Singlepage.css";
import HeadTile from "../common/HeadTile/HeadTile";
import { Link, useParams } from "react-router-dom";
import Sdata from "../components/Destination/Sdata";
import EmpyFile from "../common/EmpyFile/EmpyFile";
const Singlepage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    let item = Sdata.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);

  return (
    <>
      <HeadTile />
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/destination" className="primary-btn back">
              <i className="fas fa-long-arrow-alt-left"></i>
              Go Back
            </Link>

            <article className="content flex">
              <div className="main-content">
                <img src={item.img} alt="" />
                <p>{item.desc}</p>
                <p>{item.desc}</p>
                <div className="para flex_space">
                  <p>{item.sidepara}</p>
                  <p>{item.sidepara}</p>
                </div>
                <h1>What is the {item.title} City?</h1>
                  <p>{item.desc}</p>
                  <div className="image grid1">
                    <img src={item.paraImage_one} alt="" />
                    <img src={item.paraImage_tow} alt="" />
                  </div>
                  <p>{item.desc}</p>
              </div>
              <div className="side-content">
                <div className="box">
                    <h2>How can we help you?</h2>
                    <p>{item.sidepara}</p>
                    <button className="outline-btn">

                        <i className="fa fa-phone-alt"></i>
                        Contact Us
                    </button>
                </div>
                <div className="box2">
                <p>{item.sidepara}</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      ) : (
        <EmpyFile />
      )}
    </>
  );
};

export default Singlepage;
