export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date(),
           // p_id:Math.random().toString(36).substring(7)
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT_SUCCESS'});
        }).catch(err => {
            dispatch({type: 'CREATE_PROJECT_ERROR'}, err);
        });
    }
};

export const deleteProject = () => {

    return (dispatch, {getFirestore}) => {
        const firestore = getFirestore();
        //const profile = getState().firebase.profile;
        //  const authorId = getState().firebase.auth.uid;
        console.log("dsfdsfdsf")
        var jobskill_query = firestore.collection('projects').where('authorID', '==', 'p_id');
        jobskill_query.get().then((querySnapshot) => {
            querySnapshot.forEach(function (doc) {
                doc.ref.delete();
            });
            dispatch({type: 'DELETE_PROJECT'});
        }).catch((err) => {
            dispatch({type: 'CREATE_PROJECT_ERROR'}, err);
            console.log("Error", err)
        })


        // firestore.collection("projects").doc("DC").delete().then(function() {
        //     console.log("Document successfully deleted!");
        // }).catch(function(error) {
        //     console.error("Error removing document: ", error);
        // });
    }

}
