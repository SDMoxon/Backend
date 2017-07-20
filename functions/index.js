const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');

admin.initializeApp(functions.config().firebase);

// POST /patients/$newPatient
exports.addPatient = functions.https.onRequest((req, res) => {
    bodyParser.json();
    const patient = req.body;

    admin.database().ref('/patients').push(patient);
});

// GET /patients

exports.getPatients = functions.https.onRequest((req, res) => {
    admin.database().ref('/patients').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

// GET /wards
exports.getWards = functions.https.onRequest((req, res) => {
    admin.database().ref('/wards').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

// GET /patients/:id
exports.getPatientById = functions.https.onRequest((req, res) => {
    const id = req.query.id;
    console.log(id);
    admin.database().ref(`/patients/${id}`).once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

// GET /wards/patients/:ward
exports.getPatientsByWard = functions.https.onRequest((req, res) => {
    const wardQuery = req.query.ward;
    let filterKeys;
    admin.database().ref('/patients').once('value', function (snapshot) {

        filterKeys = Object.keys(snapshot.val()).reduce((acc, key) => {
            if (snapshot.val()[key].wardName === wardQuery) {
                acc[key] = {
                    'name': snapshot.val()[key].personalDetails.firstNames[0] + ' ' + snapshot.val()[key].personalDetails.surname,
                    'NHS number': snapshot.val()[key].personalDetails.NHSnumber,
                    'condition' : snapshot.val()[key].currentMedicalState.currentCondition
                };
                return acc;
            }
            return acc;
        }, {});
        res.status(200).send(filterKeys);

    });
});

// PUT /vitals
exports.putVitals = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const dataObject = req.body;
    const timestamp = new Date();

    admin.database().ref(`/patients/${patientId}/vitals`).child(`${timestamp}`).set(dataObject);
});

// PUT /medication
exports.putMedication = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const medicationId = req.query.medication;
    const dataObject = req.body;

    admin.database().ref(`/patients/${patientId}/medication`).child(`${medicationId}`).set(dataObject);
});

// PUT /patientDetails
exports.putPatientDetails = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const dataObject = req.body;
    
    admin.database().ref(`/patients/${patientId}/personalDetails`).set(dataObject);
});

// POST /careLog
exports.postCareLog = functions.https.onRequest((req, res) => {
    bodyParser.json();
    const patientId = req.query.id;
    const newLog = req.body;
    let timestamp = new Date();

    admin.database().ref(`/patients/${patientId}/careLog`).child(`${timestamp}`).set(newLog);
});
