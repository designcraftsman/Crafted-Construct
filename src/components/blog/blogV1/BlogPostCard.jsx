// components/BlogPostCard.jsx
import React from 'react';

const BlogPostCard = ({ image, title, category, description, author, date }) => {
  return (
    <div className="blog-post-card d-flex mb-4">
      <img src={image} alt={title} className="post-image me-3" />
      <div className='my-auto'>
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
  );
};

export default BlogPostCard;
