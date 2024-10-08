// components/BlogPostCard.jsx
import React from 'react';

const BlogPostCard = ({ image, title, category, description, author, date }) => {
  return (
    <React.Fragment>
      <div className="card blog-post-card">
        <div className="card-header">
          <img src={image} alt="rover" className="card-image" />
        </div>
        <div className="card-body">
          <span className="bg-info p-1 text-white rounded fs-6">{category}</span>
          <h3 className='fw-bold my-3 fs-5 card-title'>
            {title}
          </h3>
          <p className='fs-6 fw-normal card-description'>
            {description}
          </p>
          <div className="d-flex align-items-center gap-3">
            <img src={image} className="user-image" alt="user" />
            <div className="user-info">
              <h5 className="fw-bold fs-6">{author}</h5>
              <small className="text-muted fs-6">{date}</small>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPostCard;
