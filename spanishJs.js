// merry ~ feliz
// christmas ~ navidad
// happy ~ contento
// new ~ nuevo
// year ~ año


var translator = (function() {  //iife

  var spanishLexicon = {  //an object.  Keys are english words, values are the spanish translation.
    merry: "feliz",
    christmas: "navidad",
    happy: "contento",
    newVar: "nuevo",
    year: "año"
  }

  return {
    translateToSpanish: function(inputPH) {
// "translator" iife now has a key "translateToSpanish".  Its value is a function
// that accepts the argument "inputPH".
      var strArray = inputPH.split(" ");        //Places the input from text box into an array
      for (i = 0; i < strArray.length; i++) {   //iterate over each item in the new array
          for (word in spanishLexicon) {        //iterate over each word in the spanishLexicon array
            if (strArray[i] === word) {         //test to see if the two are equal
              strArray[i] = spanishLexicon[word];  //if so, replace the item in strArray with the
            }                                      //current word in spanishLexicon
          }

      }
      return strArray.join(" ");     //join items in array "strArray" into a string
    },

    // translateToGerman: function(inputPH) {
    //   console.log(inputPH + "german");  //test if german radio button works.

    // },
    // translateToFrench: function(inputPH) {
    //   console.log(inputPH + "french");  //test if french radio button works.

    },
  };
})();











