const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
// const cors = require('cors');

admin.initializeApp(functions.config().firebase);

// POST /patients/$newPatient
exports.addPatient = functions.https.onRequest((req, res) => {
    bodyParser.json();
    const patient = req.body;
    giveCors(res);

    admin.database().ref('/patients').push(patient);

    res.status(200).send(req.body);
});

// GET /patients

exports.getPatients = functions.https.onRequest((req, res) => {
    giveCors(res);
    admin.database().ref('/patients').once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

// GET /wards
exports.getWards = functions.https.onRequest((req, res) => {
    giveCors(res);
    admin.database().ref('/wards').once('value', (snapshot) => {
        res.status(200).send(snapshot.val());
    });
});

// GET /patients/:id
exports.getPatientById = functions.https.onRequest((req, res) => {
    const id = req.query.id;
    giveCors(res);
    
    admin.database().ref(`/patients/${id}`).once('value', function (snapshot) {
        res.status(200).send(snapshot.val());
    });
});

// GET /wards/patients/:ward
exports.getPatientsByWard = functions.https.onRequest((req, res) => {
    const wardQuery = req.query.ward;
    let filterKeys;
    giveCors(res);
    
    admin.database().ref('/patients').once('value', (snapshot) => {
        filterKeys = Object.keys(snapshot.val()).reduce((acc, key) => {
            if (snapshot.val()[key].wardName === wardQuery) {
                acc[key] = {
                    'name': snapshot.val()[key].personalDetails.firstNames[0] + ' ' + snapshot.val()[key].personalDetails.surname,
                    'NHS number': snapshot.val()[key].personalDetails.NHSnumber,
                    'condition': snapshot.val()[key].currentMedicalState.currentCondition
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
    giveCors(res);

<<<<<<< HEAD
    admin.database().ref(`/patients/${patientId}/vitals`).child(`${timestamp}`).set(dataObject)
        .then(
        res.end()
        );
=======
    admin.database().ref(`/patients/${patientId}/vitals`).child(`${timestamp}`).set(dataObject);

    res.status(200).send(req.body);
>>>>>>> 49c90bf5595869006047af1e8025104aa5e73208
});

// PUT /medication
exports.putMedication = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const medicationId = req.query.medication;
    const dataObject = req.body;
    giveCors(res);

<<<<<<< HEAD
    admin.database().ref(`/patients/${patientId}/medication`).child(`${medicationId}`).set(dataObject)
        .then(
        res.end()
        );
=======
    admin.database().ref(`/patients/${patientId}/medication`).child(`${medicationId}`).set(dataObject);

    res.status(200).send(req.body);
>>>>>>> 49c90bf5595869006047af1e8025104aa5e73208
});

// PUT /patientDetails
exports.putPatientDetails = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const dataObject = req.body;
    giveCors(res);

    admin.database().ref(`/patients/${patientId}/personalDetails`).set(dataObject)
        .then(
        res.end()
        );
});

// POST /careLog
exports.postCareLog = functions.https.onRequest((req, res) => {
    bodyParser.json();
    const patientId = req.query.id;
    const newLog = req.body;
    let timestamp = new Date();
    giveCors(res);

<<<<<<< HEAD
    admin.database().ref(`/patients/${patientId}/careLog`).child(`${timestamp}`).set(newLog)
        .then(
        res.end()
        );
=======
    admin.database().ref(`/patients/${patientId}/careLog`).child(`${timestamp}`).set(newLog);

    res.status(200).send(req.body);
>>>>>>> 49c90bf5595869006047af1e8025104aa5e73208
});

// GET patientsById
exports.patientByName = functions.https.onRequest((req, res) => {
    const patientName = req.query.name;
    const regex = new RegExp(patientName, 'gi');
    let filterKeys;
    giveCors(res);

    admin.database().ref('/patients').once('value', (snapshot) => {
        filterKeys = Object.keys(snapshot.val()).reduce((acc, key) => {
            if (regex.test(snapshot.val()[key].personalDetails.firstNames.join()) || regex.test(snapshot.val()[key].personalDetails.surname)) {
                acc[key] = snapshot.val()[key];
                return acc;
            }
            return acc;
        }, {});
        res.status(200).send(filterKeys);
    });
});

// CORS
const giveCors = function (res) {
    res.set('Access-Control-Allow-Origin', "*")
    res.set('Access-Control-Allow-Methods', 'GET, POST');
};