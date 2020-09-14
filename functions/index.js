const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
const createNotification = (notification) =>{
   return admin.firestore().collection('notifications')
    .add(notification)
    .then((doc)=>console.log('document added', doc));
}

exports.project_created = functions.firestore.document('projects/{projectId}').onCreate(doc=>{
    const project = doc.data();
    const notification = {
        content : `Added a new project ${project.title}`,
        user : `${project.authorFirstname} ${project.authorLastname}`,
        time : admin.firestore.FieldValue.serverTimestamp()
    }
    createNotification(notification) ;

});

exports.user_created = functions.auth.user().onCreate(user=>{
    return admin.firestore().collection('users').doc(user.uid).get()
    .then(doc=>{
        newUser = doc.data();
        const notification = {
            content : 'new user added',
            user : `${newUser.firstname} ${newUser.lastname}`,
            time : admin.firestore.FieldValue.serverTimestamp()
        };
        createNotification(notification);
    });

});

exports.comment_added = functions.firestore.document('comments/{commentId}').onCreate(
    doc =>{
        const comment = doc.data();
        notification = {
           content : `comment added by ${comment.author}`,
           user : comment.author,
           time : admin.firestore.FieldValue.serverTimestamp()

        }
        createNotification(notification)

    });
