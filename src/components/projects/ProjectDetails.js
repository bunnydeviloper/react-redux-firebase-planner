import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
    const { currProject, auth } = props;

    if (!auth.uid) return <Redirect to="/signin" />;

    if (currProject) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{currProject.title}</span>
                        <p>{currProject.content}</p>
                    </div>
                    <div className="card-action lighten-4 grey-text">
                        <div>Posted by {currProject.authorFirstName} {currProject.authorLastName}</div>
                        <div>19th January, 2pm</div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading project...</p>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null;
    return {
        currProject: project,
        auth: state.firebase.auth,
    };
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' },
    ]),
)(ProjectDetails);