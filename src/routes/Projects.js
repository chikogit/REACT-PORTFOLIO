import React from 'react'; 
import ProjectsPage from "../components/ProjectsPage/index";
import EarlyWorks from "../components/EarlyWorks/index";
import Work from "../components/ProjectCards/Work";

const Projects = () => {
  return (
    <div>
      <ProjectsPage/>
      <Work />
      <EarlyWorks/> 
    </div>
  ); 
}; 

export default Projects;