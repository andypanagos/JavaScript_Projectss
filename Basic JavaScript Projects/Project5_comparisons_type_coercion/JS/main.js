document.write("32" +6);

document.write(typeof "Frog");

document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function true_function() {
    document.getElementById("Test2").innerHTML = 0/0;
    document.getElementById("Test2").innerHTML = isNaN('This is a string');
}

function false_function() {
    document.getElementById("Test3").innerHTML = 0/0;
    document.getElementById("Test3").innerHTML = isNaN('007'); 
}

document.write(2E310);

document.write(-2E310);

document.write(10>2);

document.write(10 == 10);

document.write(10 == 3);

A= 10;
B= 10;
document.write(A === B);

document.write(5 > 2 && 10>4);

document.write(5>10 && 10>4);

document.write(5 > 10 || 10 > 4);

document.write(5 > 10 || 10 > 20);

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10);
}

document.write(Bigger = (5>1)? "Left number is bigger":"Right number is bigger");

