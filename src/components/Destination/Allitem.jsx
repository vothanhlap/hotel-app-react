import React, { useState } from 'react'
import Dcard from './Dcard'
import Sdata from './Sdata'

const Allitem = () => {
    const [items]=useState(Sdata)
  return (
    <>
    <section className='gallery desi mtop'>
        <div className="full_container">
        <div className="content grid">
        {
                    items.map((item)=>{
                        return(
                            <Dcard  key={item.id} item={item}/>
                        )
                    })
                }
        </div>
        </div>
    </section>
    </>
  )
}

export default Allitem