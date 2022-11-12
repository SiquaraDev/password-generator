const CHECK_UPPER_CASE = document.getElementById("upper_case");
const CHECK_NUMBERS = document.getElementById("numbers");
const CHECK_SPECIAL_CHARACTERS = document.getElementById("special_characters");

const INPUT_RANGE = document.getElementById("amount");
const SPAN_RANGE_VALUE = document.getElementById("amount_value");

const LETTERS_LOWER = "abcdefghijklmnopqrstuvwxyz";
const LETTERS_UPPER = LETTERS_LOWER.toUpperCase();
const NUMBERS = "0123456789";
const SPECIAL_CHARACTERS = "!@#$%&*";

const PASSWORD = document.getElementById("password");


function generatePassword() {

    let password = "";
    let characters = shuffleCharacters();

    while (password.length < +INPUT_RANGE.value) {
        for (i in characters) {
            let chance = Math.random() * 100;
            if (chance >= 75) {
                password += characters[i];
            }
            if (password.length >= +INPUT_RANGE.value) {
                break
            }
        }
    }
    
    PASSWORD.innerHTML = password;
}

function shuffleCharacters() {

    let characters = chooseCharacters();

    for (let i = characters.length - 1; i > 0; i--) {
            
        let j = Math.floor(Math.random() * (i + 1));
    
        [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    return characters;
}

function chooseCharacters() {

    let characters = switchCharacters();
    let newCharacters = [];

    for (i in characters) {
        let chance = Math.random() * 100;
        if (chance >= 50) {
            newCharacters.push(characters[i]);
        }
    }

    return newCharacters;
}

function switchCharacters() {

    let possibleCharacters = LETTERS_LOWER;

    if (CHECK_UPPER_CASE.checked) {
        possibleCharacters += LETTERS_UPPER;
    }

    if (CHECK_NUMBERS.checked) {
        possibleCharacters += NUMBERS;
    }

    if (CHECK_SPECIAL_CHARACTERS.checked) {
        possibleCharacters += SPECIAL_CHARACTERS;
    }

    return possibleCharacters;
}

function changeValue() {
    SPAN_RANGE_VALUE.innerHTML = INPUT_RANGE.value;
}
