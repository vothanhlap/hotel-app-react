import React, { useState } from 'react'
import BlogCard from './BlogCard'
import BlogData from './BlogData'

const AllBlog = () => {

    const [item] = useState(BlogData)
  return (
    <>
    <div className="blog top">
        <div className="container">
            <div className="content grid">
              {
                item.map((item)=>{
                  return(<BlogCard key={item.id} item={item}/>)
                })
              }
                         
            </div>
        </div>
    </div>
    </>
  )
}

export default AllBlog