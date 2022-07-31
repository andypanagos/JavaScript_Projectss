function Vote_Function() {
    var Age, Cant_Vote ;
    Age = document.getElementById("Age").value;
    Age = (Age<18) ? "You can't vote.":"You can vote.";
    document.getElementById("Vote").innerHTML = Age;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019, "White and Black");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Jack drives a" +
    Jack.Vehicle_Color + "-colored" + Jack.Vehicle_Model + "manufactured in" + Jack.Vehicle_Year;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}