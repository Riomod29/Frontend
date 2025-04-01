let car = {
    brand: "Toyota",
    modol: "Corolla",
    year: 2020,

    sayHi: function () {
        console.log ("Hello everyone");
    },
};

// for (let key in car) {
//     console.log(car[key]);
// }

car.color = "red"; //add vào
car.year = 2022; //update 

console.log(car);
