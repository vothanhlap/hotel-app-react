import React from 'react'
import { app, down, phone } from '../../../images'
import "./Download.css"

const Download = () => {
  return (
    <>
     <div className="download top">
        <div className="container flex_space">
            <div className="row">
                <h3>Download Our app</h3>
                <h1>Wow! Get This Templete App For Your Mobile </h1>
            <ul>
                <li>&#10003; get paperless confirmation</li>
                <li>&#10003; get paperless confirmation</li>
                <li>&#10003; get paperless confirmation</li>
                <li>&#10003; get paperless confirmation</li>
                <li>&#10003; get paperless confirmation</li>
             
               
            </ul>
             <div className="img flex">
                <img src={down} alt="" />
                <img src={app} alt="" />
             </div>
            </div>
            <div className="row row2">
                <img src={phone} alt="" />
            </div>
        </div>
     </div>
    </>
  )
}

export default Download