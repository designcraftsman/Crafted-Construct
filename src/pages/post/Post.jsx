import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data/blog/posts.json';
import commentsData from '../../data/blog/comments.json';
import Sidebar from '../../components/blog/SideBar';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Badge } from 'react-bootstrap';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Helmet from 'react-helmet';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const Post = () => {
  const { postId } = useParams(); // Get postId from URL
  const [post, setPost] = useState(null);
  const [image, setImage] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const foundPost = blogData.blogPosts.find((p) => p.id === postId);
    if (foundPost) {
      // Wait for the image to be imported before setting it
      importImage(foundPost.image).then((importedImage) => {
        setImage(importedImage);
      });
      const contentWithImages = replaceImagePaths(foundPost.content);
      setPost({ ...foundPost, content: contentWithImages });
    }

    // Filter comments for this post
    const postComments = commentsData.comments.filter((comment) => comment["post-id"] === postId);
    setComments(postComments);
  }, [postId]);

  // Function to replace image paths in `content` field with `require` statements
  const replaceImagePaths = (content) => {
    return content.replace(/src='([^']+)'/g, (match, src) => {
      try {
        const imagePath = require(`../../assets/${src}`);
        return `src='${imagePath}'`;
      } catch (error) {
        console.error(`Image not found: ${src}`);
        return match; // return original if image is not found
      }
    });
  };

  // Define categories and recentPosts
  const categories = blogData.categories || [];
  const recentPosts = blogData.recentPosts || [];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <React.Fragment>
      <Helmet>
        <title>{post.title} - Crafted Construct</title> {/* Set the page title */}
        <meta name="description" content={post.category} /> {/* Set the meta description */}
        <meta name="keywords" content="crafted contruct post" />{/* Set the meta keywords */}
      </Helmet>
      <div className="blog-section container my-5 py-5">
        <div className="row">
          <div className="col-md-8">
            <Container className="header">
              <Row>
                <Col className='p-0'>
                  <h1 className="article-title fw-bold fs-1">{post.title}</h1>
                </Col>
              </Row>
              <Row className='my-3'>
                <Col>
                  <Badge pill bg="primary" className="px-4 py-2 fs-6">
                    {post.category}
                  </Badge>
                </Col>
              </Row>
              <Row className="text-muted author-date-row my-3">
                <Col xs="auto">
                  <FaUser className="me-2" />
                  <span><strong>Written By:</strong> {post.author}</span>
                </Col>
                <Col xs="auto" className="ms-auto">
                  <FaCalendarAlt className="me-2" />
                  <span>{post.date}</span>
                </Col>
              </Row>
            </Container>
            <Container className="article-section mt-4">
              <Image src={image} className="object-fit-cover w-100 article-section__image mb-3" alt={`Image for ${post.title}`} />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className='fs-5 text-secondary mt-5'>
                Share : 
                <span> <FaFacebookF aria-label="Share on Facebook" /></span>
                <span> <FaInstagram aria-label="Share on Instagram" /></span>
                <span> <FaTwitter aria-label="Share on Twitter" /></span>
              </div>
              <hr className='my-5' />
              <div className="comments-section mt-4">
                <h4 className='text-primary fw-bold'>Leave a comment:</h4>
                <form className='custom-form'>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name *"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email *"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Your Comment *"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-info fw-bolder me-auto submit-btn">
                    Submit
                  </button>
                </form>
                <hr className='my-5' />

                {/* Show "No comments yet" message if no comments are available */}
                {comments.length === 0 ? (
                  <p className="text-muted text-center">No comments yet.</p>
                ) : (
                  comments.map((comment, index) => (
                    <div key={index} className="my-5">
                      <div className='d-flex align-items-center justify-content-between mb-3'>
                        <h5 className='fw-bold fs-5 m-0'>{comment.username} <span className='fs-6 opacity-75 fw-normal'>{comment.date}</span></h5>
                        <span className='fs-6 fw-normal opacity-75 ' role='button'>Reply</span>
                      </div>
                      <p>{comment.comment}</p>
                    </div>
                  ))
                )}
              </div>
            </Container>
          </div>
          <div className="col-md-4 mx-auto">
            <Sidebar categories={categories} recentPosts={recentPosts} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Post;
