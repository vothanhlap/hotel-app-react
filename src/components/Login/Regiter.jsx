import React, { useState } from "react";
import HeadTile from "../../common/HeadTile/HeadTile";
import { Link } from "react-router-dom";
import "./desige.css";
const Regiter = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [allValue, setAllValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = { fname, lname, phone, email, password };
    setAllValue([...allValue, newValue]);

    setFname("");
    setLname("");
    setPhone("");
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <HeadTile />
      <section className="forms top">
        <div className="container">
          <div className="sign-box ">
            <h1>REGITER THE ACCOUNT</h1>
            <form onSubmit={formSubmit}>
              <div className="grid1">
                <div className="input">
                  <span>First name</span>
                  <input
                    type="text"
                    name="fname"
                    placeholder='vd:Nguyen A'
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
               
                <div className="input">
                <span>
                    Last name 
                  </span>
                  <input
                    type="text"
                    name="lname"
                    placeholder='vd:A'
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
              <div className="input">
              <span>
                    Phone 
                  </span>
                  <input
                    type="text"
                    name="phone"
                    placeholder='vd:+84 123 4567 789'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
              </div>
               <div className="grid1">
               <div className="input">
               <span>
                    Email <label>*</label>
                  </span>
                  <input
                    type="text"
                    name="email"
                    placeholder='vd:info2gmail.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="input">
                  <span>Password</span>
                  <input
                    type="text"
                    name="password"
                    placeholder='vd:123Aa'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
               </div>
              <div className="flex_space">
                <div className="flex">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Do you agree with the terms?</label>
                </div>
              </div>
              <button type="submit" className="primary-btn">
                
                REGITER
              </button>
              <p>
                IF HAVE ACCOUNT ?<Link to="/sign-in">Sigin</Link>{" "}
              </p>
            </form>
          </div>
        </div>
      </section>
      <section className="show-data">
        {allValue.map((currentValue) => {
          const { fname, lname, phone, email, password } = currentValue;
          return (
            <div className="sign-box">
              <h1>Login Successfully</h1>
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
                Password: <p>{password}</p>
              </h3>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Regiter;
