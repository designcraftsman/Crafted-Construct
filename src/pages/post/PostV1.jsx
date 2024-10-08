import React,{useState} from 'react';
import NavigationBar from '../../components/navbar/navbarV1/NavbarDark';
import Footer from '../../components/footer/FooterV1';  
import Sidebar from '../../components/blog/blogV1/BlogSideBar';
import post1 from '../../assets/images/V1/blog/1.jpg';
import post2 from '../../assets/images/V1/blog/2.jpg';
import { Container, Image } from 'react-bootstrap';
import { Form,  Card } from 'react-bootstrap';
import {  Row, Col, Badge } from 'react-bootstrap';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram,  FaTwitter } from "react-icons/fa"; 

const BlogSection = () => {
  const [comments] = useState([
    { name: 'Matthew Ando', comment: 'Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit incididunt. Consectetur adipiscing elit tempor incididunt ut labore consectetur adipiscing elit vero eos et accusam et justo duo dolores et ea rebum.', date: 'April 15, 2022' },
  ]);
  const categories = ['Design', 'Improvement', 'Makeovers', 'Remodeling'];
  const recentPosts = [
    {
      image: post2,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      date: '2 days ago',
    },
    {
      image: post2,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      date: '2 days ago',
    },
    {
      image: post2,
      title: 'The Future of Sustainable Construction',
      category: 'Remodeling',
      date: '2 days ago',
    },
    // Add more recent posts here
  ];

  return (
    <React.Fragment>
    <div className="blog-section container my-5 py-5">
      <div className="row">
        <div className="col-md-8">
        <Container className="header ">
      {/* Label Row */}
      <Row>
        <Col>
          <Badge pill bg="dark" className="px-3 py-2">
            Remodeling
          </Badge>
        </Col>
      </Row>

      {/* Title and Info Row */}
      <Row className="mt-2">
        <Col>
          <h1 className="article-title">The Future of Sustainable Construction</h1>
        </Col>
      </Row>

      <Row className="text-muted author-date-row mt-2">
        <Col xs="auto">
          <FaUser className="me-2" />
          <span><strong>Written By:</strong> Oussama Fayz</span>
        </Col>
        <Col xs="auto" className="ms-auto">
          <FaCalendarAlt className="me-2" />
          <span>Sep 23, 2024</span>
        </Col>
      </Row>
    </Container>
        <Container className="article-section mt-4">
            <Image src={post1} className="img-fluid" />
            <p className="mt-4">
                As climate change becomes an increasingly urgent global issue...
            </p>

            <h3>Eco-Friendly Materials</h3>
            <Image src={post2} className="img-fluid" />
            <p>
                As climate change becomes an increasingly urgent global issue...
            </p>

            <h3>Energy-Efficient Design and Technologies</h3>
            <p>
                As climate change becomes an increasingly urgent global issue...
            </p>
            <div className='fs-5 text-secondary mt-5'>
                Share : 
                <span> <FaFacebookF/></span>
                <span> <FaInstagram/></span>
                <span> <FaTwitter/></span>
            </div>
            <hr />
            <div className="comments-section mt-4">
                
      <h4 className='text-primary fw-bold'>Leave a comment:</h4>
      <Form className='row'>
        <Form.Group className='col-6 mb-3'>
          <Form.Control type="text" placeholder="Your Name *"  />
        </Form.Group>
        <Form.Group className='col-6 mb-3'>
          <Form.Control type="email" placeholder="Your Email *" />
        </Form.Group>
        <Form.Group className='col-12 mb-3'>
          <Form.Control as="textarea" rows={3} className='mb-3' placeholder="Your Comment *" />
          <button className="btn btn-sm col-md-2 btn-info ">Post</button>
        </Form.Group>
       
        
      </Form>
        <hr />
      {comments.map((comment, index) => (
        <Card key={index} className="mb-2 border-0">
          <Card.Body>
            <div className='d-flex align-items-center justify-content-between mb-3'>
            <Card.Title className='fw-bold fs-5 m-0 '>{comment.name}  <span className='fs-6 opacity-75 fw-normal'>{comment.date}</span></Card.Title>
            <span className='fs-6 fw-noram opacity-75'>Reply</span>
            </div>
            <Card.Text>{comment.comment}</Card.Text>
          </Card.Body>
        </Card>
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

export default BlogSection;
