import React, { useEffect, useRef, useState } from 'react';
import BlogPostCard2 from './PostCard2';
import blogData from '../../data/blog/posts.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'; // Import React-Bootstrap components

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const BlogSection2 = () => {
    const sectionRef = useRef(null);
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() => {
        const loadBlogPosts = async () => {
            const loadedPosts = await Promise.all(
                blogData.blogPosts.slice(0, 2).map(async (post) => ({
                    ...post,
                    image: await importImage(post.image), // Dynamically import post image
                    authorImage: await importImage(post['author-image']) // Dynamically import author image
                }))
            );
            setBlogPosts(loadedPosts); // Set the loaded blog posts to state
        };

        loadBlogPosts();

        const currentRef = sectionRef.current;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    return (
        <Container fluid className='my-5 py-3 reveal-section' ref={sectionRef}>
            <Row>
                <Col lg={4} className="p-5 my-auto">
                    <div className="my-auto">
                        <h2 className='display-6 reveal-element reveal-1'>Our Blog</h2>
                        <h3 className='text-primary fw-semibold display-5 reveal-element reveal-2'>Latest News</h3>
                        <p className='mt-3 mb-4 reveal-element reveal-3'>Stay updated with the latest trends and insights in the construction industry.</p>
                        <Link to="/blog-v1" className='link-fill-right reveal-element reveal-4'>Check Blog</Link>
                    </div>
                </Col>
                <Col lg={8}>
                    <Row>
                        {blogPosts.map((post, index) => (
                            <Col key={index} className='col-10 mx-auto mb-4 reveal-element reveal-5'>
                                <Link to={`/post/${post.id}`} className='text-decoration-none'>
                                    <BlogPostCard2 
                                        {...post} 
                                        authorImage={post.authorImage} // Pass author image
                                        altText={`Image for ${post.title}`} // Improved alt text
                                    />
                                </Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default BlogSection2;
