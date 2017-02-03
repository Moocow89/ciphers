var caesarCipher = {
  var textStack = [];
  var alphabet = {
    "A": 0, "B": 0, "C": 0, "D": 0, "E": 0, "F": 0, "G": 0, "H": 0, "I": 0, "J": 0,
    "K": 0, "L": 0, "M": 0, "N": 0, "O": 0, "P": 0, "Q": 0, "R": 0, "S": 0, "T": 0,
    "U": 0, "V": 0, "W": 0, "X": 0, "Y": 0, "Z": 0 }

  countLetters: function(text){
      var textArray = text.split();
      textArray.forEach(letter){
        for(var key in alphabet){
          if(key === letter){
            alphabet[key] + 1;
          }
        }
      }
  },
  findMostUsedLetter: function(){
    var temp = 0;
    var mostUsedKey = "";
    Object.keys(alphabet).forEach(key){
      if(temp < alphabet[key]){
        temp = alphabet[key];
        mostUsedKey = key;
      }
    }
    return mostUsedKey;
  },
  spacedCipher: function(text, letter){
    var correctlySpacedText = text.replace(letter, " ");
    return correctlySpacedText;
  },
  replaceLetters: function(text, startLetter, endLetter){
      var newText = text.replace(startLetter, endLetter);
      textStack.push(newText);
  },
  undoReplaceLetters: function(){
    textStack.pop();
  }

}