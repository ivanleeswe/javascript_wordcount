//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (str) => {
  let wordCountResult = {};
  let currentIdx = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let nextChar = str[i + 1];
    let prevChar = str[i - 1];

    if (
      (char.charCodeAt(0) >= 9 && char.charCodeAt(0) <= 13 &&
        !isNotNumOrAlpha(nextChar.charCodeAt(0))) ||
      (char.charCodeAt(0) === 32 &&
        i !== 0 &&
        nextChar.charCodeAt(0) !== 32 &&
        !(nextChar.charCodeAt(0) >= 9 && nextChar.charCodeAt(0) <= 13)) ||
      (char === "," &&
        i !== 0 &&
        !isNotNumOrAlpha(prevChar.charCodeAt(0)) &&
        !isNotNumOrAlpha(nextChar.charCodeAt(0))) ||
      i === str.length - 1
    ) {
      let word = str.slice(currentIdx, i + 1).toLowerCase();

      let leftIdx = 0;
      let rightIdx = word.length - 1;

      while (leftIdx < rightIdx) {
        let charLeftCode = word[leftIdx].charCodeAt(0);

        while (leftIdx < rightIdx) {
          let charRightCode = word[rightIdx].charCodeAt(0);
          if (isNotNumOrAlpha(charRightCode)) rightIdx--;
          else break;
        }

        if (isNotNumOrAlpha(charLeftCode)) leftIdx++;
        else break;
      }

      const updatedWord = word.slice(leftIdx, rightIdx + 1);

      if (updatedWord in wordCountResult) wordCountResult[updatedWord]++;
      else wordCountResult[updatedWord] = 1;

      currentIdx = i;
    }
  }

  return wordCountResult;
};

const isNotNumOrAlpha = (charCode) => {
  if ((charCode < 97 || charCode > 122) && (charCode < 48 || charCode > 57))
    return true;
  else return false;
};
