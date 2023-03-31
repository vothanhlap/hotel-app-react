import React from 'react'
import { Link } from 'react-router-dom'
const BlogCard = ({item:{id, date,catgeory,title,cover,para,desc}}) => {
  return (
    <>
    <div className="items">
      <div className="img">
        <img src={cover} alt="" />
      </div>
      <div className="category flex_space">
        <span> <i class="far fa-calendar-alt"></i> {date}</span>
        <label>{catgeory}</label>
      </div>
      <div className="details">
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
      <Link to={`/blogsingle/${id}`} className="blogItem-link">
        READ MORE <i className='fa fa-long-arrow-alt-right'></i>
      </Link>
    </div>
    </>
  )
}

export default BlogCard