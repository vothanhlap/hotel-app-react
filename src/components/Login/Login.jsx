import React, { useState } from 'react'
import HeadTile from "../../common/HeadTile/HeadTile";
import { Link } from 'react-router-dom';
import "./desige.css"
const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  const [allValue, setAllValue] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    const newValue = {  email,password };
    setAllValue([...allValue, newValue]);

  
    setEmail("");
    setPassword("")
    
  };
  return (
    <>
        <HeadTile/>
        <section className='forms top'>
          <div className="container">
            <div className="sign-box "> 
            <h1>SIGIN THE ACCOUNT</h1>
              <p>Enter your e-mail and pasword below to log in your accout ang use </p>
              <form onSubmit={formSubmit}>
                  <input
                    type="text"
                    name="email"
                    placeholder='email'
                    value={email}

                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    name="password"
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="flex_space">
                    <div className="flex">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">Rember Me</label>
                    </div>
                    <div className="flex">
                      <span>I forgot my password</span>
                    </div>
                    </div>
                    <button type='submit' className='primary-btn'>Sing-In</button>
                    <p>Dont HAVE ACCOUNT ?<Link to='/regiter'>Singup</Link> </p>
                </form>
            </div>
          </div>
        </section>

        <section className="show-data">
        {allValue.map((currentValue) => {
          const {  email,password } =
            currentValue;
          return (
            <div className="sign-box">
              <h1>Login Successfully</h1>
            
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
  )
}

export default Login