use vehicle;

db.createCollection("car");

db.car.insert([{Name:"Swift",Model:'DTS',Rent_c:1,Mileage:18,trans:'automatic',Rent:1500,Fuel:'petrol',Image:'https://swift.com'},
{Name:'Benz',Model:'DTS',Rent_c:2,Mileage:11,trans:'automatic',Rent:2000,Fuel:'diesel',Image:'https://benz.com'},
{Name:'SKoda',Model:'DTS',Rent_c:1,Mileage:19,trans:'automatic',Rent:1000,Fuel:'petrol',Image:'https://skoda.com'},
{Name:'Benz',Model:'DTS',Rent_c:5,Mileage:20,trans:'automatic',Rent:2500,Fuel:'petrol',Image:'https://benz.com'},
{Name:'BMW',Model:'DTS',Rent_c:4,Mileage:24,trans:'automatic',Rent:2600,Fuel:'petrol',Image:'https://bmw.com'},
{Name:'Suzuki',Model:'DTS',Rent_c:2,Mileage:16,trans:'semi-automatic',Rent:1000,Fuel:'petrol',Image:'https://suzuki.com'},
{Name:'Duster',Model:'DTS',Rent_c:4,Mileage:15,trans:'automatic',Rent:1000,Fuel:'petrol',Image:'https://duster.com'},
{Name:'Jaguar',Model:'DTS',Rent_c:7,Mileage:25,trans:'automatic',Rent:3500,Fuel:'petrol',Image:'https://jaguar.com'},
{Name:'Audi',Model:'DTS',Rent_c:6,Mileage:20,trans:'automatic',Rent:2500,Fuel:'petrol',Image:'https://audi.com'},
{Name:'Ford',Model:'DTS',Rent_c:4,Mileage:17,trans:'semi-automatic',Rent:1500,Fuel:'petrol',Image:'https://ford.com'},
{Name:'Toyota',Model:'DTS',Rent_c:2,Mileage:15,trans:'semi-automatic',Rent:1000,Fuel:'petrol',Image:'https://toyota.com'},
{Name:'Honda',Model:'DTS',Rent_c:2,Mileage:15,trans:'semi-automatic',Rent:1500,Fuel:'petrol',Image:'https://honda.com'},
{Name:'Porsche',Model:'DTS',Rent_c:6,Mileage:20,trans:'automatic',Rent:2500,Fuel:'petrol',Image:'https://porsche.com'},
{Name:'Ferrari',Model:'DTS',Rent_c:6,Mileage:17,trans:'automatic',Rent:1700,Fuel:'petrol',Image:'https://ferrari.com'},
{Name:'Nissan',Model:'DTS',Rent_c:3,Mileage:15,trans:'automatic',Rent:1000,Fuel:'petrol',Image:'https://nissan.com'},
{Name:'Renault',Model:'DTS',Rent_c:6,Mileage:14,trans:'semi-automatic',Rent:1000,Fuel:'diesel',Image:'https://renault.com'},
{Name:'jeep',Model:'DTS',Rent_c:2,Mileage:18,trans:'automatic',Rent:1500,Fuel:'diesel',Image:'https://diesel.com'},
{Name:'Mini',Model:'DTS',Rent_c:1,Mileage:18,trans:'semi-automatic',Rent:1500,Fuel:'petrol',Image:'https://mini.com'},
{Name:'hyundai',Model:'DTS',Rent_c:1,Mileage:18,trans:'semi-automatic',Rent:1500,Fuel:'petrol',Image:'https://hyundai.com'},
{Name:'Swift',Model:'DTS',Rent_c:1,Mileage:18,trans:'automatic',Rent:1500,Fuel:'petrol',Image:'https://swift.com'},
{Name:'Swift',Model:'DTS',Rent_c:1,Mileage:18,trans:'automatic',Rent:1500,Fuel:'petrol',Image:'https://swift.com'}]);

db.car.find();

db.car.find().pretty();

db.car.update({Name:'SKoda'},{$set:{Mileage:14}});

db.car.find({$and:[{trans:'automatic'},{Fuel:'petrol'}]});

db.car.find({$or:[{Mileage:15},{Rent_c:5}]});

db.car.find({$and:[{Mileage:{$gt:18}},{Rent:{$lt:2500}}]});

db.car.find({Name:swift},{Rent:1500},{trans:'automatic'});

db.car.remove({Mileage:15});

db.car.find().sort({trans:'automatic'});

