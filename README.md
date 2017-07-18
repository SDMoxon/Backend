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