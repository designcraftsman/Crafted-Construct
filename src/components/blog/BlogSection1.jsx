import React, { useState, useRef } from 'react';
import post1 from '../../assets/images/V1/home/blogSection/1.jpg';
import { Carousel } from 'react-bootstrap';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import PostCard from './PostCard1';

const BlogSection1 = () => {
  const blogPosts = [
    {
      title: 'The Future of Sustainable Constructionaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      description: 'Explore the latest innovations in sustainable building practices and materials...',
      author: 'John Doe',
      date: '2 days ago',
      category: 'Technology',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Innovations in Solar Energy',
      description: 'Learn how solar energy is shaping the future of power generation...',
      author: 'Jane Smith',
      category: 'Technology',
      date: '1 week ago',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'AI in Construction',
      description: 'Discover the role of AI in enhancing construction efficiency...',
      author: 'Mark Lee',
      date: '3 days ago',
      category: 'Technology',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Green Architecture',
      description: 'How green architecture is transforming urban landscapes...',
      author: 'Emily Clark',
      date: '5 days ago',
      category: 'Technology',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Blockchain in Construction',
      description: 'How blockchain technology is improving transparency in construction...',
      author: 'Sam Wilson',
      date: '2 weeks ago',
      category: 'Technology',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Blockchain in Construction',
      description: 'How blockchain technology is improving transparency in construction...',
      author: 'Sam Wilson',
      date: '2 weeks ago',
      category: 'Technology',
      imageUrl: 'https://via.placeholder.com/600x400',
    },
    {
      title: 'Blockchain in Construction',
      description: 'How blockchain technology is improving transparency in construction...',
      author: 'Sam Wilson',
      category: 'Technology',
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
    <div className="blog-carousel container-fluid p-lg-5 p-3 reveal-section">
      <div className='d-flex align-items-center justify-content-between reveal-element reveal-1'>
        <div>
          <h2 className='fw-bold fs-5 reveal-element reveal-2'>Our Blog</h2>
          <h3 className="latest-news fw-bold text-primary fs-4 reveal-element reveal-3">Latest News</h3>
        </div>
        <div className='blog-carousel__large-screen reveal-element reveal-4'>
          {/* Custom Previous Button */}
          <button
            className="btn btn-dark hover-filled-slide-down mx-5 reveal-element reveal-5"
            onClick={goToPreviousSlide}
            aria-label="Previous"
            disabled={activeIndex === 0}
          >
            <FaArrowLeft className="icon fs-1 text-white" />
          </button>

          {/* Custom Next Button */}
          <button
            className="btn btn-dark hover-filled-slide-down reveal-element reveal-6"
            onClick={goToNextSlide}
            aria-label="Next"
            disabled={activeIndex === totalSlidesLarge - 1}
          >
            <FaArrowRight className="icon fs-1 text-white" />
          </button>
        </div>

        <div className='blog-carousel__small-screen reveal-element reveal-4'>
          {/* Custom Previous Button */}
          <button
            className="btn btn-dark hover-filled-slide-down mx-2 reveal-element reveal-5"
            onClick={goToPreviousSlide}
            aria-label="Previous"
            disabled={activeIndex === 0}
          >
            <FaArrowLeft className="icon fs-1 text-white" />
          </button>

          {/* Custom Next Button */}
          <button
            className="btn btn-dark hover-filled-slide-down reveal-element reveal-6"
            onClick={goToNextSlide}
            aria-label="Next"
            disabled={activeIndex === totalSlidesSmall - 1}
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
        className='blog-carousel__large-screen reveal-element reveal-7'
      >
        {Array.from({ length: totalSlidesLarge }).map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <div className="row justify-content-evenly my-5 gap-3">
              {blogPosts.slice(slideIndex * 3, slideIndex * 3 + 3).map((post, idx) => (
                <a href="post-v1" className='text-decoration-none text-dark col-3 reveal-element reveal-8'>
                  <div className="card">
                    <PostCard title={post.title} description={post.description} category={post.category} author={post.author} date={post.date} image={post1} />
                  </div>
                </a>
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
        className='blog-carousel__small-screen reveal-element reveal-7 my-3'
      >
        {blogPosts.map((slide, index) => (
          <Carousel.Item key={index}>
            <a href="post-v1" className='text-decoration-none text-dark col-10 reveal-element reveal-8'>
              <div className="card">
                <PostCard title={slide.title} description={slide.description} category={slide.category} author={slide.author} date={slide.date} image={post1} />
              </div>
            </a>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default BlogSection1;
