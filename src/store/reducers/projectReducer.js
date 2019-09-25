const initState = {}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT_SUCCESS':
            console.log('create project success');
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error');
            return state;
        case 'DELETE_Project':
            console.log('project deleted')
            return state;
        default:
            return state;
    }
};

export default projectReducer;