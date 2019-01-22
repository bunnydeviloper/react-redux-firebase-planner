export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database

        const firestore = getFirestore(); // connect to firebase storage

        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;

        // link to 'projects' collection in firebase database and add new project
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
        }).then(() => { // after adding new info to DB, we invoke the dispatch fn
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        });
    };
};