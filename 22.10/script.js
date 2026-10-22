function doubleValues(arr) {
    return arr.map(val => val * 2);
}

function onlyEvenValues(arr) {
    return arr.filter(val => val % 2 === 0);
}

function showFirstAndLast(arr) {
    let result = [];
    let first = arr[0];
    let last = arr[arr.length - 1];

    if (typeof first === "string") {
        result.push(first);
    }
    if (typeof last === "string" && arr.length > 1) {
        result.push(last);
    }

    return result;
}

function vowelCount(str) {
    let vowels = "aeiou";
    let count = {
        'a': 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    };
    let lowerStr = str.toLowerCase();
    for (let c in lowerStr) {
        if (vowels.includes(c)) {
            count[c]++;
        }
    }
}

function capStr(str) {
    return str.toUpperCase();
}

function shiftLetters(str) {
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    
    if (charCode >= 97 && charCode <= 122) {
      let newCode = charCode === 122 ? 97 : charCode + 1;
      result += String.fromCharCode(newCode);
    } else if (charCode >= 65 && charCode <= 90) {
      let newCode = charCode === 90 ? 65 : charCode + 1;
      result += String.fromCharCode(newCode);
    } else {
      result += str[i];
    }
  }
  
  return result;
}

function swapCase(str) {
  let words = str.split(" ");
  let resultWords = [];
  
  words.forEach((word, index) => {
    if (index % 2 !== 0) {
      resultWords.push(capitalize(word));
    } else {
      resultWords.push(word);
    }
  });
  
  return resultWords.join(" ");
}