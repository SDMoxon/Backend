const request = require ('axios');
const faker =require ('faker');

for (var i = 0; i < 10; i++) {
    const obj = {
        "personalDetails": {
            "email": faker.internet.email(),
            "firstNames": [
                faker.name.firstName(),
                faker.name.firstName()
            ],
            "surname": faker.name.lastName(),
            "wardName": "Acute Neurology Unit",
            "occupation": faker.name.jobTitle(),
            "bloodType": "AB",
            "NHSnumber": Math.random() * 1000000000,
            "address": "15 Hazelnute Ave, Manchester, M12 345",
            "nextOfKin": {
                "relationship": "friends",
                "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
                "contact": faker.phone.phoneNumber()
            },
            "GP": {
                "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
                "surgery": faker.company.companyName(),
                "address": `${faker.random.number()}, ${faker.address.streetName}, ${faker.address.county}`
            },
            "demographics": {
                "ethnicity": "british white",
                "gender": "male",
                "language": "ENG",
                "race": "White/Caucasian",
                "dob": faker.date.past(),
                "alcohol": {
                    "use": "yes",
                    "unitsPerWeek": faker.random.number(),
                    "unitsPerDay": faker.random.number()
                },
                "smoking": {
                    "status": "Never smoker",
                    "unitsPerWeek": faker.random.number(),
                    "unitsPerDay": faker.random.number()
                }
            }
        },
        "currentDoctor": `${faker.name.firstName()} ${faker.name.lastName()}`,
        "currentMedicalState": {
            "contagionLevel": "amber",
            "currentCondition": "pneumonia",
            "causeOfAdmission": "strong cough",
            "symptoms": "severe cough, high temperature"
        },
        "vitals": {
            "20140902T055022": {
                "author": "doctorId1",
                "organization": {
                    "href": "/medical/organizations/53c050ac51c69003200aa998",
                    "id": "53c050ac51c69003200aa998",
                    "name": "Salford Royal"
                },
                "results": {
                    "SYSTOLIC_BLOOD_PRESSURE": faker.random.number(),
                    "DIASTOLIC_BLOOD_PRESSURE": faker.random.number(),
                    "HEART_RATE": faker.random.number()
                }
            },
            "20140902T055022655A": {
                "author": "doctorId2",
                "organization": {
                    "href": "/medical/organizations/53c050ac51c69003200aa998",
                    "id": "53c050ac51c69003200aa998",
                    "name": "Salford Royal"
                },
                "results": {
                    "SYSTOLIC_BLOOD_PRESSURE": faker.random.number(),
                    "DIASTOLIC_BLOOD_PRESSURE": faker.random.number(),
                    "HEART_RATE": faker.random.number()
                }
            }
        },
        "nutritionalRequierments": {
            "lactose intolerance": {
                "recommendation": "dont serve milk"
            },
            "gluten intolerance": {
                "recommendation": "serve gluten-free produce"
            }
        },
        "surgeries": null,
        "prep": null,
        "testRan": {
            "20140902T055022655A": {
                "name": "lung x-ray",
                "linkToFiles": "link/file/lung-x-ray",
                "organization": {
                    "href": "/medical/organizations/53c050ac51c69003200aa998",
                    "name": "Cleveland Clinic"
                },
                "notes": "looking good, nothing to see here"
            }
        },
        "additionalSymptoms": {},
        "currentTreatment": {},
        "medication": {
            "loratadine": {
                "type": "(CLARITIN) 10 MG tablet",
                "commonBrandName": "CLARITIN",
                "dosageInfo": "10 MG tablet",
                "instructions": "Take 1 tab by mouth as needed (allergies)."
            }
        },
        "allergies": {
            "Oxycodone": {
                "createAt": "2014-10-19T21:02:17.949Z",
                "updatedAt": "2014-10-19T21:02:17.949Z",
                "reactions": "swollen hands",
                "codes": {
                    "10831": {
                        "codeSystem": "2.16.840.1.113883.6.88",
                        "codeSystemName": "RxNorm",
                        "name": "Bactrim"
                    },
                    "N0000008034": {
                        "codeSystem": "2.16.840.1.113883.3.26.1.5",
                        "codeSystemName": "NDF-RT",
                        "name": "Sulfa (Sulfonamide Antibiotics)"
                    }
                }
            }
        },
        "medicalHistory": {
            "patientHistory": {
                "lazyitosis": {
                    "date": "20-07-2017",
                    "treatement": {
                        "surgeries": {
                            "hospital": "Procrastination General",
                            "surgeon": "Shea Le Beuf"
                        }
                    },
                    "medication": {
                        "loratadine": {
                            "type": "(CLARITIN) 10 MG tablet",
                            "commonBrandName": "CLARITIN",
                            "dosageInfo": "10 MG tablet",
                            "instructions": "Take 1 tab by mouth as needed (allergies)."
                        }
                    }
                }
            },
            "familyHistory": {
                "John Doe": {
                    "relationship": "Parent",
                    "condition": "Acute Procrastinatory Neurosis",
                    "date": "18-07-2010"
                }
            }
        },
        "careLog": {
            "20140902T055022655dsadA": {
                "author": "Dr. Who",
                "witness": "Dr Who’s Phone Booth",
                "note": "This is a note"
            }
        }
    };
    request.post('https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/addPatient', obj)
}
