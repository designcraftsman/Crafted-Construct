import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa'; 
import contactInfoData from '../../data/contact/contact-info.json';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import React-Bootstrap components

const ContactForm1 = () => {
    return (
        <Container className="contact-section my-5">
            <Row className="gap-5">
                {/* Form Section */}
                <Col lg={8}>
                    <h4 className="contact-heading text-decoration-underline">GET IN TOUCH</h4>
                    <p>
                        Our objective at Woodenx is to bring together our visitor's societies
                        and spirits with our own, communicating enthusiasm and liberality in
                        the food we share.
                    </p>
                    <Form className='custom-form'>
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email *"
                                    required
                                />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Subject *"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Your Comment *"
                                required
                            />
                        </Form.Group>
                        <Button type="submit" className="btn btn-info fw-bolder me-auto submit-btn">
                            Submit
                        </Button>
                    </Form>
                </Col>

                {/* Contact Info Section */}
                <Col lg={3} className="contact-info m-auto">
                    <ul className="list-unstyled fs-5">
                        {contactInfoData.contactInfo.map((info, index) => (
                            <li key={index} className="mb-3">
                                <div className='d-flex align-items-center gap-3'>
                                    {info.icon === 'FaMapMarkerAlt' && <FaMapMarkerAlt className='text-muted fs-1' />}
                                    {info.icon === 'FaPhoneAlt' && <FaPhoneAlt className='text-muted fs-1' />}
                                    {info.icon === 'FaClock' && <FaClock className='text-muted fs-1' />}
                                    <span className='fs-5'>{info.text}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default ContactForm1;
