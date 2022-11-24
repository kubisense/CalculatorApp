let x=0;
function Button(i){

    //console.log(buttonPress.length);
    let displayScreen = document.getElementById('display-screen');

    //read displayscreen content into a variable x
    x =  displayScreen.innerHTML;

    // add next input (number in the form of string) to stored x value and output on display screen
    displayScreen.innerHTML = x + i;
        
}

