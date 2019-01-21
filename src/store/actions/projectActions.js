import ProjectSummary from "../../components/projects/ProjectSummary";

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firestore = getFirestore(); // connect to firebase storage

        // link to 'projects' collection in firebase database and add new project
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Test First Name',
            authorLastName: 'Test Last Name',
            authorId: 12345,
            createdAt: new Date(),
        }).then(() => { // after adding new info to DB, we invoke the dispatch fn
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });
    };
};