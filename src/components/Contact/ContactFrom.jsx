import React, { useState } from "react";
import "./Contact.css";
const ContactFrom = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [allValue, setAllValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { fname, lname, phone, email, subject, company, message };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setSubject("");
    setCompany("");
    setMessage("");
  };
  return (
    <>
      <section className="contact mtop">
        <div className="container flex">
          <div className="main-content">
            <h2>Contact Form</h2>
            <p>Fill out thr forn below, we wil get back you soon. </p>

            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>
                    First name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Last name <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Phone <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Subject <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="input">
                  <span>
                    Your Company <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
              <div className="input">
                <span>
                  Write Your Message <label>*</label>
                </span>
                <textarea
                  name="message"
                  value={message}
                  cols="2000"
                  rows="10"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className="primary-btn">Submit Now</button>
            </form>
          </div>
          <div className="side-content">
            <h3>Visit our location</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              dicta temporibus.
            </p>
            <br />
            <h3>Message Us</h3>
            <span>
              {" "}
              <i className="fa fa-envelope"></i> vothanhlap450@gmail.com
            </span>
            <br />
            <span>
              {" "}
              <i className="fa fa-phone-volume"></i> 0372177993
            </span>
            <br />
            <h3>Follow Us</h3>
            <div className="flex_space">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-pinterest"></i>
            </div>
          </div>
        </div>
      </section>
      <section className="show-data">
        {allValue.map((currentValue) => {
          const { fname, lname, phone, email, subject, company, message } =
            currentValue;
          return (
            <div className="sign-box">
              <h1>Send Successfully</h1>
              <h3>
                First Name: <p>{fname}</p>
              </h3>
              <h3>
                Last Name: <p>{lname}</p>
              </h3>
              <h3>
                Phone: <p>{phone}</p>
              </h3>
              <h3>
                Email: <p>{email}</p>
              </h3>
              <h3>
                Subject: <p>{subject}</p>
              </h3>
              <h3>
                Company: <p>{company}</p>
              </h3>
              <h3>
                Message: <p>{message}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ContactFrom;
