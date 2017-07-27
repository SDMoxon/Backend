# Northcoders-Project-NHS-App-Backend

An app designed for doctors with the aim of making their lives easier. Instead of using the bedside patient sheet we're building a super secure app. 

## Backend Config
* Google Firebase 
* Google Cloud functions

## How to use it
* API URL: 
* Endpoints: 
``` 
GET /patients.json - gets all of the patients
GET /patients/$id.json - gets patients by id
GET /patients/$id/ward.json - gets patient ward, can be used to filter patients by ward
```
* you must add the auth code as a query 
```
url/endpoint.json?auth=###################
```
=======
* Function URL (addPatient): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/addPatient
* nction URL (getPatients): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/getPatients
* Function URL (getWards): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/getWards
* Function URL (getPatientById)      :https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/getPatientById
* Function URL (getPatientsByWard):https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/getPatientsByWard
* Function URL (putVitals): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/putVitals
* Function URL (putMedication):  https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/putMedication
* Function URL (putPersonalDetails): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/putPersonalDetails
* Function URL (postCareLog): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/postCareLog
* Function URL (putCareLog): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/putCareLog
* Function URL (patientByName): https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/patientByName

## Sprint History

### Monday 17th July 2017
* create a test database
* hooked it up to a React instance
* modelled the data 

### Tuesday 18th July 2017
* build the getPatients endpoint
* build the getPatientsById endpoint
* build the getPatientsByWardName endpoint

#### Sprint Summary