// components/BlogPostCard.jsx
import React from 'react';

const BlogPostCard2 = ({ image, title, category, description, author, date }) => {
  return (
    <React.Fragment>
      <div className="card blog-post-card">
        <div className="row g-0">
          <div className="col-md-6">
            <img src={image} alt="blog post" className=" card-image-v2" />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h3 className='fw-bold  fs-5 card-title'>
                {title}
              </h3>
              <span className="bg-primary fw-semibold  p-1 text-white rounded fs-6">{category}</span>
              <p className='fs-6 fw-normal card-description my-3'>
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogPostCard2;
