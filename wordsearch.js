/* const printMatrix = require("./matrix_transposition")
const transpose = require("./matrix_tranposition") */
const {printMatrix, transpose} = require("./matrix_transposition");

const wordSearch = (letters, word) => { 
    console.log(`letters:${printMatrix(letters)}`);
    const horizontalJoin = letters.map(ls => ls.join(''))
    // console.log(`horizontalJoin is:${horizontalJoin}`);

    const verticalLetters = transpose(letters.map(ls => ls.join('')));
    const verticalJoin = verticalLetters.map(ls => ls.join(''))


    console.log(`verticalLetters:${printMatrix(verticalLetters)}`);
    for (l of horizontalJoin) {
        // console.log(`horizontalJoin is:${l}`);
        if (l.includes(word)) return true;
    }
    for (l of verticalJoin) {
        // console.log(`horizontalJoin is:${l}`);
        if (l.includes(word)) return true;
    }
    return false;
}


module.exports = wordSearch;







