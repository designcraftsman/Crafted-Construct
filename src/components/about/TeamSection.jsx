import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import teamData from '../../data/about/team.json'; 

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/images/team/${imagePath}`).then(module => module.default);
};

const TeamSection = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const loadTeamMembers = async () => {
      // Load team members' images dynamically
      const loadedMembers = await Promise.all(
        teamData.team.map(async (member) => ({
          ...member,
          image: await importImage(member.image) // Load each member's image
        }))
      );
      setTeamMembers(loadedMembers); // Set the loaded team members to state
    };

    loadTeamMembers();
  }, []);

  return (
    <Container fluid className='m-0 p-0 reveal-section'>
      <Row className='m-0'>
        <Col lg={6} className='bg-secondary text-white d-flex align-items-center justify-content-center'>
          <div className='p-5 reveal-element reveal-1'>
            <h2 className='text-primary fw-bold display-6'>Meet Our Team</h2>
            <p className='fw-normal fs-1'>
              Ac feugiat sed lectus vest ibu lum mattis ull amcorper veli ti sed. Sol licitud in tempor id eu nisl nunc mi ipsum fau cibus vita niu mae.
            </p>
          </div>
        </Col>
        <Col lg={6} className='m-0 p-0 h-100'>
          <Row className='m-0 p-0'>
            {teamMembers.map((member, index) => (
              <Col key={index} className={`col-6 m-0 p-0 reveal-element reveal-${index + 2}`}>
                <img src={member.image} className='object-fit-cover w-100 h-100 background-image' alt={member.name} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TeamSection;
