import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project {id}</span>
                    <p>Bla bla bla bla bla hahahahhahaha...</p>
                </div>
                <div className="card-action lighten-4 grey-text">
                    <div>Posted by The Sleepy Sophie</div>
                    <div>19th January, 2pm</div>
                </div>
            </div>
        </div>
    );
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        currProject: project,
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
    ]),
)(ProjectDetails);