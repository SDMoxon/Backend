const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

// POST /patients/$newPatient
exports.addPatient = functions.https.onRequest((req,res) => {
    bodyParser.json();
    const patient = req.body;
    
    admin.database().ref('/patients').push(patient)
    res.status(200).send('Patient added!')
});

// GET /patients/

exports.getPatients = functions.https.onRequest((req,res) => {
    admin.database().ref('/patients').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

// get /wards/
exports.getWards = functions.https.onRequest((req,res) => {
    admin.database().ref('/wards').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

exports.getPatientsByWard = functions.https.onRequest((req,res) => {
    admin.database().ref('/patients').once('value', function (snapshot) {
        res.status(200).send(
            Object.keys(snapshot.val()).filter((key) => {
                return snapshot.val()[key].wardName === 'Acute Neurology Unit';
            })
        );
    });
});