import React, { useState } from 'react';
import Project from '../Project';

function ProjectList() {
    const [isProjectOpen, setIsProjectOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState();
    
    const [projects] = useState([
        {
            name: 'some-notes',
            category: 'javascript',
            description: 'A fast easy way to write and keep track of notes.',
          },
          {
            name: 'libr-fy',
            category: 'group project',
            description: 'Libro-fy is a website that allows their users to create a personal bookshelf on the fly.',
          },
          {
            name: 'calender-proj',
            category: 'html-css',
            description: 'A Simple Calender app that displays correct Time and Date',
          },
          {
            name: 'recipe-selector',
            category: 'group project',
            description: 'This webpage will allow the undecided user to find new recipes to ingredients they already have in their kitchen.',
          },
          {
            name: 'find-it-with-expressions',
            category: 'tutorial',
            description: 'In this tutorial I will be discussing how to find email address with regex(regular expressions)',
          },
          {
            name: 'Run Buddy ',
            category: 'html-css',
            description: 'Start building Habits with Run Buddy!',
          }

    ])

    const currectProject = projects.gilter((project) => project.category === category)

    const toggleProject = () => {
      setCurrectProject({ src });
      setIsProjectOpen(!isProjectOpen);
    }

    return(
      <div>
      {isProjectOpen && <Project onClose={toggleProject} currentProject={currentProject} />}
      <div className="flex-row">
        {projects.map((project, i) => (
          <img
            src={}
            alt={project.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleProject(image, i)}
            key={project.name}
          />
        ))}
      </div>
    </div>
    )

}

export default ProjectList;