/* eslint-disable no-template-curly-in-string */
import React from 'react'
import { Link } from 'react-router-dom'
const Dcard = ({item:{id, img,title,dec,sidepara,paraImage_one,paraImage_tow}}) => {
  return (
    <>
    <div className="items">
        <div className="img">
            <img src={img} alt="" />
            <Link to={`/singlepage/${id}`} className="blogItem-link">
                <i className='fas fa-external-link-alt'></i>
            </Link>
        </div>
        <div className="title">
            <h3>{title}</h3>
        </div>
    </div>
    </>
  )
}

export default Dcard