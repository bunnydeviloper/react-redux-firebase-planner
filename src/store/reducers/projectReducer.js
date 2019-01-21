const initState = {
    projects: [
        {id: 1, title: "Google Map Recommendation", content: "blah blah blah"},
        {id: 2, title: "Project Management Planner", content: "blah blah blah"},
        {id: 3, title: "Profile Page", content: "blah blah blah"},
        {id: 4, title: "Using MongoDB for Data Storage", content: "blah blah blah"},
        {id: 5, title: "Animal Trading Card", content: "blah blah blah"},
    ],
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
    }
    return state;
}

export default projectReducer;