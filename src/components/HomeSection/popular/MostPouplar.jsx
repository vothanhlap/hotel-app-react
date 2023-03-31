import React from 'react'
import Card from './Card'
import "./MostPouolar.css"

const MostPouplar = () => {
  return (
    <>
    <div className="popular top">
        <div className="full_container">
            <div className="heading">
                <h1>Most Popular Hotel</h1>
                <div className="line"></div>
                <div className="content">
                    <Card/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MostPouplar