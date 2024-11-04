import React, { useState, useRef, useEffect } from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import PostCard from './PostCard1';
import { Link } from 'react-router-dom';
import blogData from '../../data/blog/posts.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const BlogSection1 = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const loadBlogPosts = async () => {
      const loadedPosts = await Promise.all(
        blogData.blogPosts.map(async (post) => ({
          ...post,
          image: await importImage(post.image), // Dynamically import post image
          authorImage: await importImage(post['author-image']) // Dynamically import author image
        }))
      );
      setBlogPosts(loadedPosts); // Set the loaded blog posts to state
    };

    loadBlogPosts();
  }, []);

  const totalSlidesLarge = Math.ceil(blogPosts.length / 3);

  const handleSlide = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container fluid className="blog-carousel p-lg-5 p-3 reveal-section">
      <Row>
        <Col>
          <h2 className='fw-semibold display-6 reveal-element reveal-1'>Our Blog</h2>
          <h3 className="latest-news fw-medium text-primary display-5 reveal-element reveal-2">Latest News</h3>
        </Col>
      </Row>

      {/* Large Screen Carousel */}
      <Carousel
        ref={carouselRef}
        indicators={false}
        controls={false}
        interval={null}
        activeIndex={activeIndex}
        onSelect={handleSlide}
        className='blog-carousel__large-screen'
      >
        {Array.from({ length: totalSlidesLarge }).map((_, slideIndex) => (
          <Carousel.Item key={slideIndex}>
            <Row className="justify-content-evenly my-5 gap-3 reveal-element reveal-3">
              {blogPosts.slice(slideIndex * 3, slideIndex * 3 + 3).map((post, idx) => (
                <Col key={idx} className='col-3'>
                  <Link to={`/post/${post.id}`} className='text-decoration-none text-dark'>
                    <div className="card">
                      <PostCard
                        title={post.title}
                        description={post.description}
                        category={post.category}
                        author={post.author}
                        date={post.date}
                        image={post.image}
                        authorImage={post.authorImage}
                        altText={`Image for ${post.title}`}
                      />
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
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
        className='blog-carousel__small-screen my-3'
      >
        {blogPosts.map((post, index) => (
          <Carousel.Item key={index}>
            <Link to={`/post/${post.id}`} className='text-decoration-none text-dark col-10'>
              <div className="card reveal-element reveal-4">
                <PostCard
                  title={post.title}
                  description={post.description}
                  category={post.category}
                  author={post.author}
                  date={post.date}
                  image={post.image}
                  authorImage={post.authorImage}
                  altText={`Image for ${post.title}`}
                />
              </div>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default BlogSection1;
