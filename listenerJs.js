// button id is 'translateButton'

document.getElementById("translateButton").addEventListener("click", function(){

var input = document.getElementById("input").value;

  if (document.getElementById('german').checked === true) {
    translator.translateToGerman(input);

  }

  else if (document.getElementById('french').checked === true) {
    translator.translateToFrench(input);

  }

  else if (document.getElementById('spanish').checked === true) {
    document.getElementById('output').innerText = translator.translateToSpanish(input);
    //div with id "output" now has innerText equal to the value returned to variable "translator"
    //from calling its property ".translateToSpanish" with the "input" variable being passed as
    //the argument
  }

  else {
    console.log('Check a box!')
  }


// document.getElementById('output').innerText = ??;

});

// function works for words:
// merry, christmas, happy, new year






