const testString = 'This is a test string with diacritics: áéíóúüñç';
const str = testString
  .trim() // Remove any whitespace from the beginning and end of the string
  .normalize("NFD") // Decompose any accented characters into base characters and diacritics
  .replace(/\p{Diacritic}/gu, '') // Remove any diacritics
  .replace(/[^\w\s]/g, '') // Remove any non-word characters
  .replace(/\s+/g, ' ') // Replace any multiple spaces with a single space
  .replace(/[A-Za-z0-9]/g, (match) => /[a-z]/.test(match) ? 'x' : 'X'); // Replace any alphanumeric characters with either an 'x' or 'X'

// Test the output
console.log(testString);
console.log(str);