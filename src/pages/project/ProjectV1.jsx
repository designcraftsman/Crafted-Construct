import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../../data/portfolio/projects.json';

const importImage = (imagePath) => {
  return import(`../../assets/${imagePath}`).then(module => module.default);
};

function ProjectV1() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const loadProject = async () => {
      const selectedProject = projectsData.portfolioItems[projectId];
      if (selectedProject) {
        const img1 = await importImage(selectedProject.image1);
        const img2 = await importImage(selectedProject.image2);
        const img3 = await importImage(selectedProject.image3);
        const img4 = await importImage(selectedProject.image4);
        setProject({ ...selectedProject, img1, img2, img3, img4 });
      }
    };
    loadProject();
  }, [projectId]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className='container my-5 py-5'> 
      <div className='row m-auto single-project-container'>
        <div className='col-lg-7 col-12 '>
          <img src={project.img1} className='single-project-container__image' alt={project.title} />
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
              <img src={project.img2} className=' single-project-container__image' alt="" />
          </div>
          <div className='col-lg-6 col-12 my-5'>
              <img src={project.img3} className='single-project-container__image' alt="" />
          </div>
          <div className='col-lg-6 col-12 my-5'>
                <img src={project.img4} className='single-project-container__image' alt="" />
          </div>
      </div>
    </div>
  );
}

export default ProjectV1;
