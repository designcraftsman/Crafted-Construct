import React, { useState, useRef } from 'react';
import post1 from '../../../assets/images/V1/home/blogSection/1.jpg';
import person1 from '../../../assets/images/V1/home/testimonialsSection/1.jpg';
import { Carousel, Card } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const BlogCarousel = () => {
  const blogPosts = [
    {
      title: 'The Future of Sustainable Construction',
      description: 'Explore the latest innovations in sustainable building practices and materials...',
      author: 'John Doe',
      date: '2 days ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Innovations in Solar Energy',
      description: 'Learn how solar energy is shaping the future of power generation...',
      author: 'Jane Smith',
      date: '1 week ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'AI in Construction',
      description: 'Discover the role of AI in enhancing construction efficiency...',
      author: 'Mark Lee',
      date: '3 days ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Green Architecture',
      description: 'How green architecture is transforming urban landscapes...',
      author: 'Emily Clark',
      date: '5 days ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Blockchain in Construction',
      description: 'How blockchain technology is improving transparency in construction...',
      author: 'Sam Wilson',
      date: '2 weeks ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Blockchain in Construction',
      description: 'How blockchain technology is improving transparency in construction...',
      author: 'Sam Wilson',
      date: '2 weeks ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Blockchain in Construction',
      description: 'How blockchain technology is improving transparency in construction...',
      author: 'Sam Wilson',
      date: '2 weeks ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
  ];

  // Reference for the Carousel
  const carouselRef = useRef(null);

  // State to keep track of the current active index
  const [activeIndex, setActiveIndex] = useState(0);

  // Total number of slides (each slide displays 3 posts for large screens)
  const totalSlidesLarge = Math.ceil(blogPosts.length / 3);

  // Total number of slides (each slide displays 1 post for small screens)
  const totalSlidesSmall = blogPosts.length;

  // Update the active index when the slide changes
  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  // Navigate to the previous slide
  const goToPreviousSlide = () => {
    if (activeIndex > 0) {
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Navigate to the next slide
  const goToNextSlide = () => {
    if (activeIndex < totalSlidesLarge - 1 || activeIndex < totalSlidesSmall - 1) {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="blog-carousel container-fluid p-lg-5 p-3">
      <div className='d-flex align-items-center justify-content-between'>
        <div>
          <h2 className='fw-bold fs-5'>Our Blog</h2>
          <h3 className="latest-news fw-bold text-primary fs-4">Latest News</h3>
        </div>
        <div className='large-screen-carousel'>
          {/* Custom Previous Button */}
          <button
            className="btn btn-dark hover-filled-slide-down mx-5"
            onClick={goToPreviousSlide}
            aria-label="Previous"
            disabled={activeIndex === 0}  // Disable if on the first slide
          >
            <FaArrowLeft className="icon fs-1 text-white" />
          </button>

          {/* Custom Next Button */}
          <button
            className="btn btn-dark hover-filled-slide-down"
            onClick={goToNextSlide}
            aria-label="Next"
            disabled={activeIndex === totalSlidesLarge - 1}  // Disable if on the last slide
          >
            <FaArrowRight className="icon fs-1 text-white" />
          </button>
        </div>

        <div className='small-screen-carousel'>
          {/* Custom Previous Button */}
          <button
            className="btn btn-dark hover-filled-slide-down mx-2"
            onClick={goToPreviousSlide}
            aria-label="Previous"
            disabled={activeIndex === 0}  // Disable if on the first slide
          >
            <FaArrowLeft className="icon fs-1 text-white" />
          </button>

          {/* Custom Next Button */}
          <button
            className="btn btn-dark hover-filled-slide-down"
            onClick={goToNextSlide}
            aria-label="Next"
            disabled={activeIndex === totalSlidesSmall - 1}  // Disable if on the last slide
          >
            <FaArrowRight className="icon fs-1 text-white" />
          </button>
        </div>
      </div>

      {/* Large Screen Carousel */}
      <Carousel
        ref={carouselRef}
        indicators={false}
        controls={false}
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleSlide}
        className='large-screen-carousel'
      >
        {Array.from({ length: totalSlidesLarge }).map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="d-flex justify-content-evenly my-5">
              {blogPosts.slice(slideIndex * 3, slideIndex * 3 + 3).map((post, idx) => (
                <Card className="col-3" key={idx}>
                  <Card.Img variant="top" src={post1} alt={post.title} />
                  <Card.Body>
                    <Card.Title className='fw-bold fs-4'>{post.title}</Card.Title>
                    <Card.Text className="fw-normal fs-6">{post.description}</Card.Text>
                    <div className="d-flex align-items-center">
                      <img src={person1} alt="author" className="rounded-circle img-fluid col-1 m-0" />
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

      {/* Small Screen Carousel */}
      <Carousel
        ref={carouselRef}
        indicators={false}
        controls={false}
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleSlide}
        className='small-screen-carousel'
      >
        {blogPosts.map((slide, index) => (
          <Carousel.Item key={index}>
            <Card className="col-12 my-3" key={index}>
              <Card.Img variant="top" src={post1} alt={slide.title} />
              <Card.Body>
                <Card.Title className='fw-bold fs-4'>{slide.title}</Card.Title>
                <Card.Text className="fw-normal fs-6">{slide.description}</Card.Text>
                <div className="d-flex align-items-center">
                  <img src={person1} alt="author" className="rounded-circle img-fluid col-1 m-0" />
                  <div className="ms-2 my-2">
                    <p className='fw-bold m-0'>{slide.author}</p>
                    <p className='m-0'>{slide.date}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogCarousel;
