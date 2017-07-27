const functions = require('firebase-functions');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors')({ origin: true });

admin.initializeApp(functions.config().firebase);

//
// The routes below showcase where the functions will post data in the database
//

// GET to /patients
exports.getPatients = functions.https.onRequest((req, res) => {
    admin.database().ref('/patients').once('value', function (snapshot) {
        cors(req, res, () => {
            res.status(200).send(snapshot.val());
        });
    });
});

// GET to /wards
exports.getWards = functions.https.onRequest((req, res) => {
    admin.database().ref('/wards').once('value', (snapshot) => {
        cors(req, res, () => {
            res.status(200).send(snapshot.val());
        });
    });
});

// GET to /patient/:id
exports.getPatientById = functions.https.onRequest((req, res) => {
    const id = req.query.id;

    admin.database().ref(`/patients/${id}`).once('value', function (snapshot) {
        cors(req, res, () => {
            res.status(200).send(snapshot.val());
        });
    });
});

// GET to /patients/:ward
exports.getPatientsByWard = functions.https.onRequest((req, res) => {
    const wardQuery = req.query.ward;
    let filterKeys;

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
        cors(req, res, () => {
            res.status(200).send(filterKeys);
        });
    });
});

// GET to patients/:name
exports.patientByName = functions.https.onRequest((req, res) => {
    const patientName = req.query.name;
    const regex = new RegExp(patientName, 'gi');
    let filterKeys; 

    admin.database().ref('/patients').once('value', (snapshot) => {
        filterKeys = Object.keys(snapshot.val()).reduce((acc, key) => {
            if (regex.test(snapshot.val()[key].personalDetails.firstNames.join()) || regex.test(snapshot.val()[key].personalDetails.surname)) {
                acc[key] = snapshot.val()[key];
                return acc;
            }
            return acc;
        }, {});
        cors(req, res, () => {
            res.status(200).send(filterKeys);
        });
    });
});

// PUT to patients/:id/vitals
exports.putVitals = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const dataObject = req.body;
    const timestamp = new Date();

    admin.database().ref(`/patients/${patientId}/vitals`).child(`${timestamp}`).set(dataObject);
    cors(req, res, () => {
        res.status(200).send(dataObject);
    });
});

// PUT to patients/:id/medication
exports.putMedication = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const medicationId = req.query.medication;
    const dataObject = req.body;

    admin.database().ref(`/patients/${patientId}/medication`).child(`${medicationId}`).set(dataObject);
    cors(req, res, () => {
        res.status(200).send(dataObject);
    });
});

// PUT to patients/:id/personalDetails
exports.putPersonalDetails = functions.https.onRequest((req, res) => {
    const patientId = req.query.id;
    const dataObject = req.body;

    admin.database().ref(`/patients/${patientId}`).child('personalDetails').update(dataObject)
        .then(
            cors(req, res, () => {
                res.status(200).send(dataObject);
            })
        );
});

// PUT to patients/:id/careLog/:careLogId
exports.putCareLog = functions.https.onRequest((req, res) => {
    bodyParser.json();
    const patientId = req.query.id;
    const careLogId = req.query.careLogId;
    const newLog = req.body;
    let timestamp = new Date();
    if (newLog.done === 'true') {
        newLog.completedAt = timestamp.toString();
    }

    admin.database().ref(`/patients/${patientId}/careLog/${careLogId}`).update(newLog);
    cors(req, res, () => {
        res.status(200).send(newLog);
    });
});

// POST to patients/:id/careLog
exports.postCareLog = functions.https.onRequest((req, res) => {
    bodyParser.json();
    const patientId = req.query.id;
    const newLog = req.body;
    let timestamp = new Date();
    newLog.createdAt = timestamp.toString();
    newLog.done = false;

    admin.database().ref(`/patients/${patientId}/careLog`).push(newLog);
    cors(req, res, () => {
        res.status(200).send(newLog);
    });
});

// POST to /patients
exports.addPatient = functions.https.onRequest((req, res) => {
    bodyParser.json();
    const patient = req.body;
    admin.database().ref('/patients').push(patient);
    
    cors(req, res, () => {
        res.status(200).send(patient);
    });
});


