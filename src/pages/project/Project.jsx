import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/portfolio/projects.json';

// Import images dynamically
const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

function ProjectV1() {
  const { projectId } = useParams(); // Get projectId from URL
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      const selectedProject = projectsData.portfolioItems[projectId]; // Find the project by ID
      if (selectedProject) {
        const img1 = await importImage(selectedProject.image1); // Load first project image
        const img2 = await importImage(selectedProject.image2); // Load second project image
        const img3 = await importImage(selectedProject.image3); // Load third project image
        const img4 = await importImage(selectedProject.image4); // Load fourth project image
        setProject({ ...selectedProject, img1, img2, img3, img4 }); // Set project state with images
      }
    };
    loadProject();
  }, [projectId]);

  if (!project) {
    return <div>Project not found</div>; // Handle case where project is not found
  }

  return (
    <div className='container my-5 py-5'> 
      <div className='row m-auto single-project-container'>
        <div className='col-lg-7 col-12 '>
          <img src={project.img1} className='single-project-container__image' alt={`Image of ${project.title}`} />
        </div>
        <div className='col-lg-5 col-12 my-lg-0 my-5 bg-secondary rounded text-white p-4'>
          <h1 className='fw-bold fs-3 mb-5'>{project.title}</h1>
          <h2 className='fs-5 text-decoration-underline fw-semibold'>Location:</h2>
          <p className='fs-6 fw-light'>{project.location}</p>
          <h2 className='fs-5 text-decoration-underline fw-semibold'>Project Scope:</h2>
          <p className='fs-6 fw-light'>{project.scope}</p>
          <h2 className='fs-5 text-decoration-underline fw-semibold'>Description</h2>
          <p className='fs-6 fw-light'>{project.description}</p>
        </div>
          <div className='col-12 my-5'>
              <img src={project.img2} className=' single-project-container__image' alt={`Image of ${project.title} - 2`} />
          </div>
          <div className='col-lg-6 col-12 my-5'>
              <img src={project.img3} className='single-project-container__image' alt={`Image of ${project.title} - 3`} />
          </div>
          <div className='col-lg-6 col-12 my-5'>
                <img src={project.img4} className='single-project-container__image' alt={`Image of ${project.title} - 4`} />
          </div>
      </div>
    </div>
  );
}

export default ProjectV1;