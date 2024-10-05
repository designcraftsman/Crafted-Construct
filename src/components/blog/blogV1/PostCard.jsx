// components/BlogPostCard.jsx
import React from 'react';

const BlogPostCard = ({ image, title, category, description, author, date }) => {
  return (
     <React.Fragment>
                <div class="card-header">
                  <img src={image} alt="rover" />
                </div>
                <div class="card-body">
                  <span class="bg-info p-1 text-white rounded fs-6">{category}</span>
                  <h3 className='fw-bold my-3 fs-5 card-title'>
                    {title}
                  </h3>
                  <p className='fs-6 fw-normal card-description'>
                    {description}
                  </p>
                  <div class="d-flex align-items-center gap-3 ">
                    <img src={image} className='user-image' alt="user" />
                    <div class="user-info">
                      <h5 className='fw-bold fs-6'>{author}</h5>
                      <small className='text-muted fs-6'>{date}</small>
                    </div>
                  </div>
                </div>
            </React.Fragment>
  );
};

export default BlogPostCard;
