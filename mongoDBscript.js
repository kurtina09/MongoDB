use cs45Student06;

db.createCollection ("Hospital" ,{ 
    validator: {$jsonSchema: { 
        bsonType: "object", 
        properties: { 
            hospitalID: { bsonType: "number", description: "Hospital ID (U)" },
            hospitalName: { bsonType: "string", description: "Hospital Name (U)"}, 
            hospitalAddress: { bsonType: "string", description: "Hospital Address (U)"},
            hospitalCapacity: { bsonType: "number", description: "Hospital Capacity"},
            totalDoctors: { bsonType: "number", description: "Total Doctors"},
            hospitalPatients: { bsonType: ["array"], items: { bsonType: "object", 
            properties: { 
                    patientID: { bsonType: "number", description: "Patient ID (U)"}, 
                    patientName: { bsonType: "string", description: "Patient Name"},
                    patientDisease: { bsonType: "string" },
                    dateAdmitted: { bsonType: "date", description: "Patient Admission Date"},
                    patientBalance: { bsonType: "double", description: "Patient Balance"} 	
            }
            }
            } 	
        }
    }} 
});

var toInsert = { 
    hospitalID: 100,
    hospitalName: "Tracy Sutter Hospital",
    hospitalAddress: "1234 Sutter Rd, Tracy, CA",
    hospitalCapacity: 900,
    totalDoctors: 500,
    hospitalPatients: []
};
db.Hospital.insert(toInsert);

db.Hospital.createIndex( 
    { "hospitalID": 1 }, { unique: true }
);

var hospital2 = {
    hospitalID: 200,
    hospitalName: "Dublin Kaiser Permanente",
    hospitalAddress: "1234 Waterfordson, Dublin, CA",
    hospitalCapacity: 1000, 
    totalDoctors: 500,
    hospitalPatients: []
};

var hospital3 = {
    hospitalID: 300, 
    hospitalName: "Livermore Mini Hospital", 
    hospitalAddress: "1234 Las Positas Rd, Livermore CA", 
    hospitalCapacity: 50, 
    totalDoctors: 5, 
    hospitalPatients: []
};

var hospital4 = {
    hospitalID: 400, 
    hospitalName: "Walmart Hyper Hospital", 
    hospitalAddress: "1234 Toys Department, Walmart, CA", 
    hospitalCapacity: 1500, 
    totalDoctors: 90, 
    hospitalPatients: []
};

var hospital5 = {
    hospitalID: 500, 
    hospitalName: "Fremont Osgood Hospital", 
    hospitalAddress: "1234 Osgood Rd, Fremont, CA", 
    hospitalCapacity: 250, 
    otalDoctors: 85, 
    hospitalPatients: []
};

db.Hospital.insertMany([hospital2, hospital3, hospital4, hospital5]);

//error here
var errorInsert = {
    hospitalID: 100, 
    hospitalName: "Fake-Ass Hospital Made in China", 
    hospitalAddress: "1212 Fake Fake, China", 
    hospitalCapacity: 900, 
    totalDoctors: 500, 
    hospitalPatients: []
};
db.Hospital.insert(errorInsert);

var patient1 = {
    patientID: 1001, 
    patientName: "Patient Uno", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 1000.00
};
db.Hospital.update( {hospitalID: 100}, { $push: {hospitalPatients: patient1}});

var patA = {
    patientID: 101, 
    patientName: "Patient Dos", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 1500.
};

var patB = {
    patientID: 102, 
    patientName: "Patient Tres", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 0.00
};

var patC = {
    patientID: 103, 
    patientName: "Patient Quatro", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: -69.69
};

var patD = {
    patientID: 104, 
    patientName: "Patient Cinco", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: -420.00
};

var patE = {
    patientID: 105, 
    patientName: "Patient Seis", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 1500.00
};

var patF = {
    patientID: 106, 
    patientName: "Patient Siete", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 1500.00
};

var patG = {
    patientID: 107, 
    patientName: "Patient Ocho", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: -452.00
};

var patH = {
    patientID: 108, 
    patientName: "Patient Nueve", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 888.00
};

var patI = {
    patientID: 109, 
    patientName: "Patient Diez", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 0.00
};

var patJ = {
    patientID: 110, 
    patientName: "Patient Once", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 0.00
};

var patK = {
    patientID: 111, 
    patientName: "Patient Doce", 
    patientDisease: "TZombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 0.00
};

var patL = {
    patientID: 112, 
    patientName: "Patient Trece", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 99.00
};

var patM = {
    patientID: 112, 
    patientName: "Patient Catorce", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 1500.00
};

var patN = {
    patientID: 112, 
    patientName: "Patient Quince", 
    patientDisease: "Zombie Virus", 
    dateAdmitted: new Date(), 
    patientBalance: 1500.00
};

var patO = {
    patientID: 112, 
    patientName: "Patient Dieciseis", 
    patientDisease: "Vampirism", 
    dateAdmitted: new Date(), 
    patientBalance: 1500.00
};

//updates
db.Hospital.update( 
    {hospitalID: 100}, 
    {$push: 
        {
            hospitalPatients: {
                $each: [patA,patB,patC]
            } 
        } 
    } 
);

db.Hospital.update( 
    {hospitalID: 200}, 
    {$push: 
        {
            hospitalPatients: {
            $each: [patD, patE, patF]
            } 
        } 
    } 
);

db.Hospital.update( 
    {hospitalID: 300}, 
    {$push: 
        {
            hospitalPatients: {
                $each: [patG, patH, patI]
            } 
        } 
    } 
);

db.Hospital.update( 
    {hospitalID: 400}, 
    {$push: 
        {
            hospitalPatients: {
                $each: [patJ, patK, patL]
            } 
        } 
    } 
);

db.Hospital.update( 
    {hospitalID: 500}, 
    {$push: 
        {
            hospitalPatients: {
                $each: [patM, patN, patO]
            } 
        } 
    } 
);



print("\n \t*Hospital Lists*");
print("------------------------------------------------------------");
db.Hospital.find().forEach( function(printHosp) { print("Hospital Name: " + printHosp.hospitalName); } ); 
print("------------------------------------------------------------");

print("\n \t*Hospital Names and Capacity*");
print("------------------------------------------------------------");
db.Hospital.find().forEach( function(printHosp) { print("Hospital Name: " + printHosp.hospitalName + " \n  Hospital Capacity: " + printHosp.hospitalCapacity + "\n");} ); 
print("------------------------------------------------------------");

print("\n \t*Hospitals With More than 20 Doctors*");
print("------------------------------------------------------------");
db.Hospital.find().forEach( function(printHosp) { if(printHosp.totalDoctors > 20) { print("Hospital Name: " + printHosp.hospitalName + " \n  Total Doctors: " + printHosp.totalDoctors + "\n"); } } ); 
print("------------------------------------------------------------");

print("\n \t*Hospital Name and Patients With Balance > 0*");
print("------------------------------------------------------------");
db.Hospital.find().forEach(
    function(printHosp) {
        printHosp.hospitalPatients.forEach( function(printPatient){ if(printPatient.patientBalance > 0.00) { print("Hospital Name: " + printHosp.hospitalName + " \n Patient Name: " + printPatient.patientName +   " \n  Total Balance: " + printPatient.patientBalance + "\n"); } }
        );
    }
); 
print("------------------------------------------------------------");

print("\n \t*Hospital Name and Patient Balances (Zero and Negative Balances) *");
print("------------------------------------------------------------");
db.Hospital.find().forEach(
    function(printHosp) {
        printHosp.hospitalPatients.forEach(
            function(printPatient){
                if(printPatient.patientBalance <= 0.00){ print("Hospital Name: " + printHosp.hospitalName + " \n Patient Name: " + printPatient.patientName + " \n  Total Balance: " + printPatient.patientBalance + "\n"); }
            }
        );
    }
);
print("------------------------------------------------------------");
db.Hospital.drop();