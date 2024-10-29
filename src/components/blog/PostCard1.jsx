// components/BlogPostCard.jsx
import React from 'react';
import { Card } from 'react-bootstrap'; // Import Card from React-Bootstrap

const BlogPostCard = ({ image, title, category, description, author, date }) => {
  return (
    <Card className="blog-post-card">
      <div className="card-header">
          <img src={image} alt="rover" className="card-image" />
        </div>
      <Card.Body>
        <span className="bg-primary fw-semibold p-1 text-white rounded fs-6">{category}</span>
        <Card.Title className='fw-bold my-3 fs-5 card-title'>{title}</Card.Title>
        <Card.Text className='fs-6 fw-normal card-description'>{description}</Card.Text>
        <div className="d-flex align-items-center gap-3">
          <img src={image} className="user-image" alt="user" />
          <div className="user-info">
            <h5 className="fw-bold fs-6">{author}</h5>
            <small className="text-muted fs-6">{date}</small>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogPostCard;
