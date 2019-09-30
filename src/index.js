const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function chunkString(str, size) {
  return str.match(new RegExp(".{1," + size + "}", "g"));
}

function decode(expr) {
  const encodedSymbols = chunkString(expr, 10);
  let decodedString = "";

  encodedSymbols.forEach(element => {
    let encodedSymbol = "";
    if (element === "**********") {
      decodedString += " ";
    } else {
      chunkString(element, 2).forEach(decodedLetter => {
        if (decodedLetter == "10") encodedSymbol += ".";
        else if (decodedLetter == "11") encodedSymbol += "-";
      });

      decodedString += MORSE_TABLE[encodedSymbol];
    }
  });
  return decodedString;
}

module.exports = {
  decode
};
