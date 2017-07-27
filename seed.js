const request = require('axios');
const faker = require('faker');


request.get('https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/getWards')
    .then((res) => {
        let wardNames = [];
        for (let key in res.data) {
            wardNames.push(res.data[key].name)
        }
        return wardNames;
    })
    .then((wardNames) => {
        for (var i = 0; i < 50; i++) {
            const obj = {
                "personalDetails": {
                    "email": faker.internet.email(),
                    "firstNames": [
                        faker.name.firstName(),
                        faker.name.firstName()
                    ],
                    "surname": faker.name.lastName(),
                    "occupation": faker.name.jobTitle(),
                    "bloodType": "AB",
                    "NHSnumber": Math.floor(Math.random() * 1000000000),
                    "address": `${faker.random.number()}, ${faker.address.streetName()}, ${faker.address.county()} ${faker.address.zipCode()}`,
                    "nextOfKin": {
                        "relationship": "friends",
                        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
                        "contact": faker.phone.phoneNumber()
                    },
                    "GP": {
                        "name": `${faker.name.firstName()} ${faker.name.lastName()}`,
                        "surgery": faker.company.companyName(),
                        "address": `${faker.random.number()}, ${faker.address.streetName()}, ${faker.address.county()}`
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
                        "name": "lactose intolerance",
                        "recommendation": "dont serve milk"
                    },
                    "gluten intolerance": {
                        "name": "gluten intolerance",
                        "recommendation": "serve gluten-free produce"
                    }
                },
                "testResult": {
                    "bloods": {
                        "20140902T055022655A": {
                            "white Cell Count": Math.floor(Math.random() * 11),
                            "heamoglobin": Math.floor(Math.random() * 165),
                            "platelets": Math.floor(Math.random() * 450),
                            "vitimin b12": Math.floor(Math.random() * 900)
                        }

                    },
                    "urine": {
                        "20140902T055022655A": {
                            "nitrate": Math.floor(Math.random() * 11),
                            "protein": Math.floor(Math.random() * 165),
                            "pH": Math.floor(Math.random() * 450),
                            "glucose": Math.floor(Math.random() * 900)
                        }
                    }
                },
                "medication": {
                    "loratadine": {
                        "name": "loratadine",
                        "type": "(CLARITIN) 10 MG tablet",
                        "commonBrandName": "CLARITIN",
                        "dosageInfo": "10 MG tablet",
                        "instructions": "Take 1 tab by mouth as needed (allergies)."
                    },
                    "paracetamol": {
                        "name": "paracetamol",
                        "type": "(Tylenol) 500 MG tablet",
                        "commonBrandName": "Tylenol",
                        "dosageInfo": "500 MG tablet",
                        "instructions": "Take 2 tab by mouth every 4 hours."
                    }
                },
                "allergies": {
                    "Oxycodone": {
                        "name": "Oxycodone",
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
                        "leishmaniasis": {
                            "name": "leishmaniasis",
                            "date": "20-07-2017",
                            "treatement": {
                                "surgeries": {
                                    "hospital": "Procrastination General",
                                    "surgeon": "Shea Le Beuf"
                                }
                            },
                            "medication": {
                                "Abraxane": {
                                    "name": "Abraxane",
                                    "type": "chemotherapy",
                                    "commonBrandName": "CLARITIN",
                                    "dosageInfo": "260 MG/m2 IV",
                                    "instructions": "260 MG/m2 to be distributed via IV"
                                }
                            }
                        }
                    },
                    "familyHistory": {
                        "John Doe": {
                            "name": "John Doe",
                            "relationship": "Parent",
                            "condition": "Acute Procrastinatory Neurosis",
                            "date": "18-07-2010"
                        }
                    }
                },
                "wardName": wardNames[Math.floor(Math.random() * wardNames.length)],
                "careLog": {
                    "-Kq3kGex9ajuYDZYc7h7": {
                        "author": "The Game",
                        "createdAt": "Thu Jul 27 2017 15:53:54 GMT+0000 (UTC)",
                        "done": false,
                        "note": "I am a note",
                        "witness": "I am a witness"
                    }
                }
            };
            request.post('https://us-central1-live-northcoders-nhs-app.cloudfunctions.net/addPatient', obj)
        }
    })


