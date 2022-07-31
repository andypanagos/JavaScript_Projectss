function constant_function() {
    const New_Car = {make: "Ford", model: "F150", color: "silver"};
    New_Car.color = "silver";
    New_Car.price = "$50000";
    document.getElementById("Constant").innerHTML = "The cost of the " + New_Car.model + "is" + New_Car.price;
}

document.getElementById("demo").innerHTML = myFunction("John");

function myFunction(name) {
    return "Hello " + name;
}