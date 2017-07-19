const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

// POST /patients/$newPatient
<<<<<<< HEAD
exports.addPatient = functions.https.onRequest((req, res) => {
=======
exports.addPatient = functions.https.onRequest((req,res) => {
    bodyParser.json();
>>>>>>> 14f6c1e71a58ad4ebf870a8b1779de1320dc11ab
    const patient = req.body;
    
    admin.database().ref('/patients').push(patient)
<<<<<<< HEAD
        .then(snapshot => {
            res.redirect(303, snapshot.val());
        });
=======
    res.status(200).send('Patient added!')
>>>>>>> 14f6c1e71a58ad4ebf870a8b1779de1320dc11ab
});

// GET /patients/

exports.getPatients = functions.https.onRequest((req, res) => {
    admin.database().ref('/patients').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

// get /wards/
exports.getWards = functions.https.onRequest((req, res) => {
    admin.database().ref('/wards').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

exports.getPatientById = functions.https.onRequest((req, res) => {
    const id = req.query.id;
    console.log(id);
    admin.database().ref(`/patients/${id}`).once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

exports.getPatientsByWard = functions.https.onRequest((req, res) => {
    const wardQuery = req.query.ward;
    let filterKeys;
    admin.database().ref('/patients').once('value', function (snapshot) {
       filterKeys = Object.keys(snapshot.val()).reduce((acc, key) => {
                if (snapshot.val()[key].wardName === wardQuery) { 
                    acc[key] = snapshot.val()[key];
                    return acc;
                }
                    return acc;
            }, {});
        res.status(200).send(filterKeys);
            
    });
});