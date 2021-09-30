import React from 'react';
import ProjectList from './ProjectList'

function Project({ onClose, currentProject}) {
  const { name, description, category, index  } = currentProject;

  return (
    <div>
      <div>
        <h3 className=" ">{name} </h3>
        <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
        <ProjectList></ProjectList>
        <p>
          {description}
        </p>
        <button type="button" onClick={onClose}>
          Close this project
        </button>
      </div>
    </div>
  );
};

export default Project;
