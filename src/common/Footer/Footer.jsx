import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid">
          <div>
            <h2>ABOUT US</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
              commodi aut, soluta obcaecati autem ab.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis
              commodi aut, soluta obcaecati autem ab.
            </p>
            <div className="icon">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-google"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
           
              
            </div>
          </div>
          <div>
            <h2>NAVIGATION</h2>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/gallery">Gallery</a>
              </li>
              <li>
                <a href="/destination">Destination</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/testimonail">Testimonail</a>
              </li>
              <li>
                <a href="/contact Us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>RECENT POSTS</h2>
            <div className="post">
              <li>
                <label>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium autem
                </label>
                <br />
                <span>
                <i class="far fa-calendar-alt"></i>  01 Oct 2021
                </span>
              </li>

              <li>
                <label>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium autem
                </label>
                <br />
                <span>
                <i class="far fa-calendar-alt"></i>  01 Oct 2021
                </span>
              </li>
              <li>
                <label>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium autem
                </label>
                <br />
                <span>
                <i class="far fa-calendar-alt"></i>  01 Oct 2021
                </span>
              </li>
            </div>
          </div>
          <div>
            <h2>NEWSLITTER</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
            <input type="text" name="text" id="" />
            <button className="primary-btn">SUBMIT ABC</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
