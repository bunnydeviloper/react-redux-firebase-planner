import React from 'react'
import ProjectSumary from './ProjectSummary'

const ProjectList = () => {
    return (
        <div className="project-list section">
            <ProjectSumary />
            <ProjectSumary />
            <ProjectSumary />
            <ProjectSumary />
        </div>
    );
};

export default ProjectList;