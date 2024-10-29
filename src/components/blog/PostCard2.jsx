// components/BlogPostCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap'; // Import Card from React-Bootstrap

const BlogPostCard2 = ({ image, title, category, description, author, date }) => {
  return (
    <Card className="blog-post-card">
      <div className="row g-0">
        <div className="col-md-6 image-container">
          <Card.Img variant="top" src={image} alt="blog post" className="card-image-v2" />
        </div>
        <div className="col-md-6">
          <Card.Body>
            <Card.Title className='fw-bold fs-5'>{title}</Card.Title>
            <span className="bg-primary fw-semibold p-1 text-white rounded fs-6">{category}</span>
            <Card.Text className='fs-6 fw-normal card-description my-3'>{description}</Card.Text>
            <div className="d-flex align-items-center gap-3">
              <img src={image} className="user-image" alt="user" />
              <div className="user-info">
                <h5 className="fw-bold fs-6">{author}</h5>
                <small className="text-muted fs-6">{date}</small>
              </div>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

export default BlogPostCard2;
