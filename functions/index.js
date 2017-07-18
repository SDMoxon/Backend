const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.addPatient = functions.https.onRequest((req,res) => {
    const original = req.body;

    admin.database().ref('/patients').push(original)
    .then(snapshot => {
        res.redirect(303, snapshot.ref);
    });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.'onRequest'((request, response) => {
//  response.send("Hello from Firebase!");
// });
