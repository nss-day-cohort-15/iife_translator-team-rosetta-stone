var translator = (function() {  //iife

  var frenchLexicon = {  //an object.  Keys are english words, values are the french translation.
    merry: "joyeux",
    christmas: "noel",
    happy: "content",
    newVar: "nouveau",
    year: "an",
  }

  return {
    translateToFrench: function(inputPH) {
// "translator" iife now has a key "translateToSpanish".  Its value is a function
// that accepts the argument "inputPH".
      var strArray = inputPH.split(" ");        //Places the input from text box into an array
      for (i = 0; i < strArray.length; i++) {   //iterate over each item in the new array
          for (word in frenchLexicon) {        //iterate over each word in the frenchLexicon array
            if (strArray[i] === word) {         //test to see if the two are equal
              strArray[i] = frenchLexicon[word];  //if so, replace the item in strArray with the
            }                                      //current word in spanishLexicon
          }

      }
      return strArray.join(" ");     //join items in array "strArray" into a string
    },

    translateToGerman: function(inputPH) {
      console.log(inputPH + "german");  //test if german radio button works.

    },
    translateToSpanish: function(inputPH) {
      console.log(inputPH + "spanish");  //test if french radio button works.

    },
  };
})();