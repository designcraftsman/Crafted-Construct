import React from 'react';
import post1 from '../../../assets/images/V1/home/blogSection/1.jpg';
import person1 from '../../../assets/images/V1/home/testimonialsSection/1.jpg';
import { Carousel, Card } from 'react-bootstrap';
import { FaArrowRight , FaArrowLeft } from "react-icons/fa";

const BlogCarousel = () => {
  const blogPosts = [
    {
      title: 'The Future of Sustainable Construction',
      description: 'Explore the latest innovations in sustainable building practices and materials...',
      author: 'John Doe',
      date: '2 days ago',
      imageUrl: 'https://via.placeholder.com/600x400', // Use your image URL here
    },
    // Repeat the same object for multiple posts
  ];

  return (
    <div className="blog-carousel p-5 ">
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <h2 className='fw-bold fs-4'>Our Blog</h2>
                <h3 className="latest-news fw-bold text-primary">Latest News</h3>
            </div>
            <div>
            <button
                className="bg-primary p-3 mx-5"
               
                aria-label="Previous"
            >
                <FaArrowLeft className="servicesCarousel__icon fs-3 text-white " />
            </button>

            {/* Custom Next Button */}
            <button
                className=" bg-primary p-3 "
               
                aria-label="Next"
            >
                <FaArrowRight className="servicesCarousel__icon fs-3 text-white  "/>
            </button>
            </div>
        </div>
      
      <Carousel indicators={false} interval={null} prevIcon={<span className="prev-btn">←</span>} nextIcon={<span className="next-btn">→</span>}>
        {blogPosts.map((post, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between my-5">
              {/* Display three cards per carousel item */}
              {Array(3).fill().map((_, idx) => (
                <Card className="col-3" key={idx}>
                  <Card.Img variant="top" src={post1} alt={post.title} />
                  <Card.Body>
                    <Card.Title className='fw-bold fs-4'>{post.title}</Card.Title>
                    <Card.Text className="fw-normal fs-6">{post.description}</Card.Text>
                    <div className="d-flex align-items-center">
                      <img src={person1} alt="author" className="rounded-circle img-fluid col-1  m-0 " />
                      <div className="ms-2 my-2">
                        <p className='fw-bold m-0'>{post.author}</p>
                        <p className='m-0'>{post.date}</p>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
