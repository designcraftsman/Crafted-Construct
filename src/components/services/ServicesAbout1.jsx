import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PiHandshakeThin } from "react-icons/pi";
import servicesData from '../../data/services/servicesAbout1.json';

const ServicesAbout = () => {
    return (
        <Container>
            <Row className='my-5'>
                <Col md={6}>
                    <h2 className='display-5'>
                        {servicesData.title}
                    </h2>
                </Col>
                <Col md={6} className='m-auto text-center'>
                    <PiHandshakeThin className='display-1 text-primary' />
                </Col>
            </Row>
        </Container>
    );
}

export default ServicesAbout;