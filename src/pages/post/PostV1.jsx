import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data/blog/posts.json';
import Sidebar from '../../components/blog/SideBar';
import { Container, Image } from 'react-bootstrap';
import { Row, Col, Badge } from 'react-bootstrap';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

const Post = () => {
  const { postId } = useParams(); // Get postId from URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const foundPost = blogData.blogPosts.find(p => p.id === postId);
      if (foundPost) {
        const image = await importImage(foundPost.image);
        setPost({ ...foundPost, image });
      }
    };

    loadPost();
  }, [postId]);

  // Define categories and recentPosts
  const categories = blogData.categories || []; // Assuming categories are part of your blogData
  const recentPosts = blogData.recentPosts || []; // Assuming recentPosts are part of your blogData

  const [comments] = useState([
    { name: 'Matthew Ando', comment: 'Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit incididunt. Consectetur adipiscing elit tempor incididunt ut labore consectetur adipiscing elit vero eos et accusam et justo duo dolores et ea rebum.', date: 'April 15, 2022' },
    { name: 'Matthew Ando', comment: 'Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit incididunt. Consectetur adipiscing elit tempor incididunt ut labore consectetur adipiscing elit vero eos et accusam et justo duo dolores et ea rebum.', date: 'April 15, 2022' },
  ]);

  if (!post) {
    return <div>Post not found</div>; // Handle case where post is not found
  }

  return (
    <React.Fragment>
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
              <Image src={post.image} className="object-fit-cover w-100 article-section__image mb-3" />
              <div dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className='fs-5 text-secondary mt-5'>
                Share : 
                <span> <FaFacebookF/></span>
                <span> <FaInstagram/></span>
                <span> <FaTwitter/></span>
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
                {comments.map((comment, index) => (
                  <div key={index} className="my-5">
                    <div className='d-flex align-items-center justify-content-between mb-3'>
                      <h5 className='fw-bold fs-5 m-0'>{comment.name} <span className='fs-6 opacity-75 fw-normal'>{comment.date}</span></h5>
                      <span className='fs-6 fw-normal opacity-75'>Reply</span>
                    </div>
                    <p>{comment.comment}</p>
                  </div>
                ))}
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
