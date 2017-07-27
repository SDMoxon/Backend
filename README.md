# App Summary

An app designed for doctors with the aim of making their lives easier. Instead of using the bedside patient sheet we're building a super secure app. 

## Backend Summary

The goal was building RESTful API using Google Firebase for the front-end and public use.

## Using the API

For the purposes of this project we kept function access open, but usually you would authenticate the use.

Format for calling the functions: URL + the desired cloud function + any required params
```
const URL = "https://us-central1-live-northcoders-nhs-app.cloudfunctions.net"
```

### Available Functions:

#### **getPatients**
Making a GET request to the link below will return all of the patients stored.

    ${URL}/getPatients

Works by making a database call to:

    // GET to /patients

#### **getWards**

Making a GET request to the link below will return all of the wards stored.

    ${URL}/getWards

Works by making a database call to:

    // GET to /wards

#### getPatientById

Making a GET request to the link below will return the patient with the a matching id.

    ${URL}/getPatientById/?id=####


Works by making a database call to:

    // GET to /patients/:id

#### getPatientsByWard

Making a GET request to the link below will return the patients with the matching ward.

    ${URL}/getPatientsByWard/?ward=####

Works by making a database call to:

    // GET to /patients/:ward

#### patientByName

Making a GET request to the link below will return the patient with the matching name.

    ${URL}/patientByName/?name=####

Works by making a database call to:

    // GET to patients/:name

#### putVitals

Making a PUT request to the link below will add vitals to a patient id.

    ${URL}/putVitals/?id=####

Works by making a database call to:

    // PUT to patients/:id/vitals

#### putMedication

Making a PUT request to the link below will add medication to a patient id.

    ${URL}/putMedication/?id=####&medication=####

Works by making a database call to:

    // PUT to patients/:id/medication

#### putPersonalDetails

Making a PUT request to the link below will update patient personalDetails.

    ${URL}/putPersonalDetails/?id=####

Works by making a database call to:

    // PUT to patients/:id/personalDetails

#### putCareLog

Making a PUT request to the link below will update a specific careLog item.

    ${URL}/putCareLog/?id=####?careLogId=######

Works by making a database call to:

    // PUT to patients/:id/careLog/:careLogId

#### postCareLog

Making a POST request to the link below will add a carelog item for a specific patient.

    ${URL}/putCareLog/?id=####

Works by making a database call to:

    // POST to patients/:id/careLog

#### addPatient

Making a POST request to the link below will add a patient.

    ${URL}/addPatient

Works by making a database call to:

    // POST to /patients

