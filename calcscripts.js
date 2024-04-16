// function show(value) {
//     var display = document.getElementById('display');
//     if (display.innerHTML == '0') {
//         display.innerHTML = value;
//     } else {
//         display.innerHTML += value;
//     }
// }
// function reset() {
//     document.getElementById('display').innerHTML = '0';
// }

// function equal() {
//     var display = document.getElementById('display');
//     display.innerHTML = eval(display.innerHTML);
// }

// function show(value) {
//     // alert(value);
//     document.getElementById("display").innerHTML += value;
// }








function show(value){
    var display = document.getElementById('display');
    if(display.innerHTML === '0'){
        display.innerHTML = value;
    }
    else{
        display.innerHTML += value;
    }
}

function reset(){
    document.getElementById("display").innerHTML="0"
}

function equal(){
    var display= document.getElementById("display");
    display.innerHTML= eval(display.innerHTML);
}