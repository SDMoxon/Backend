const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// POST /patients/$newPatient
exports.addPatient = functions.https.onRequest((req,res) => {
    const patient = req.body;

    admin.database().ref('/patients').push(patient)
    .then(snapshot => {
        res.redirect(303, snapshot.ref);
    });
});

// GET /patients/

exports.getPatients = functions.https.onRequest((req,res) => {
    admin.database().ref('/patients').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});