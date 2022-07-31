function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section.toUpperCase();
}
function slice_Search() {
    var A = "All work and no play makes Johnny a dull boy.";
    document.getElementById("Slices").innerHTML = A.search("play")
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}


function precision_Method() {
    var X = 12938.3021988765;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {
    var A = 6.346457235;
    var B = A.toFixed();
    document.getElementById("Fixed").innerHTML = B
}

function value_Method() {
let text = "Hello World"; 
let result = text.valueOf() 
document.getElementById("Value").innerHTML = result
}


function full_Sentence() {
    var part_1 = "I have";
    var part_2 = "made this";
    var part_3 = "into a complete";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence
}