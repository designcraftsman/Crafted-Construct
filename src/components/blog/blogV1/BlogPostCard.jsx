// components/BlogPostCard.jsx
import React from 'react';

const BlogPostCard = ({ image, title, category, description, author, date }) => {
  return (
    <a href="post-v1" className='text-decoration-none text-dark'>
    <div className="blog-post-card row mb-4 m-auto my-4 gap-1 ">
      <img src={image} alt={title} className=" col-lg-6 col-md-6 col-12   " />
      <div className='my-auto col-lg-5 col-md-5 col-12  '>
        <h5>{title}</h5>
        <div className="post-category badge  mb-2">{category}</div>
        <p className="post-description">{description}</p>
        <div className="post-meta d-flex align-items-center">
          <img src={author.avatar} alt={author.name} className="author-avatar me-2" />
          <div>
            <p className="author-name m-0 me-2 ">{author.name}</p>
            <span className="post-date">{date}</span>
          </div>
        </div>
      </div>
    </div>
    </a>
  );
};

export default BlogPostCard;
