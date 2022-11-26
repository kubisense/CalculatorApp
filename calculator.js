let x = 0;

// ----- Start creation of two display section(input and output) inside the display screen------//
let displayScreen = document.getElementById('display-screen');
let display1 = document.createElement('p');
displayScreen.appendChild(display1);
let display2 = document.createElement('p');
displayScreen.appendChild(display2);
// ----- End creation of two display section inside the display screen------//

//---  start creation of div element to store inputted values---//
let inputBank = document.createElement("div");
inputBank.id = 'myInput';
let budy = document.body;
budy.insertBefore(inputBank, budy.children[1]);
budy.appendChild(inputBank);
//---  End creation of div element to store inputted values---//

let oldInput = 0;

function Button(i){
    //read displayscreen content into a variable x
    
    let x =  display1.innerHTML;

    // add next input (number in the form of string) to stored x value and output on display screen
    display1.innerHTML = x + i;
    // store all inputs in inputBank variable before any arithmetic button is pressed
    inputBank.innerHTML = parseInt(display1.innerHTML);
    return x;
        
}
//console.log(displayScreen.innerHTML);

function plusButton(){
    
    // read previously stored values in inputBank
    let newInput = document.getElementById('myInput').innerHTML;
    if(display1.innerHTML!=""){
        let outputVal =  parseInt(newInput) + parseInt(oldInput);
        //current output values are stored in oldInput and new values to be inputted will be stored in newInput
        oldInput = outputVal;
        display1.innerHTML = "";
        display2.innerHTML = outputVal;
    }
    
}


