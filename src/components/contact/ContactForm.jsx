import React from 'react';
import { CiLocationOn, CiPhone, CiClock1 } from "react-icons/ci";
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
                    <Form className='custom-form' aria-label="Contact Form">
                        <Row>
                            <Col md={6} className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Your Name *"
                                    required
                                    aria-label="Your Name"
                                />
                            </Col>
                            <Col md={6} className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Your Email *"
                                    required
                                    aria-label="Your Email"
                                />
                            </Col>
                        </Row>
                        <Form.Group className="mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Subject *"
                                required
                                aria-label="Subject"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control
                                as="textarea"
                                rows={5}
                                placeholder="Your Comment *"
                                required
                                aria-label="Your Comment"
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
                            <li key={index} className="mb-5">
                                <div className='d-flex flex-column align-items-start gap-1'>
                                    <p className='fw-bold my-1'>
                                        {info.icon === 'CiLocationOn' && <CiLocationOn className='fs-1' aria-hidden="true" />}
                                        {info.icon === 'CiPhone' && <CiPhone className='fs-1' aria-hidden="true" />}
                                        {info.icon === 'CiClock1' && <CiClock1 className='fs-1' aria-hidden="true" />}
                                        <span className='mx-2'>{info.name}</span>
                                    </p>
                                    <span className='fs-6'>{info.text}</span>
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
