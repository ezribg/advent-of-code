import { parseData, findTotalSum } from '../../utils.js'
import { readFileSync } from 'fs';

const input = readFileSync('./input3.txt', 'utf8').trimEnd();
const testInput = readFileSync('./input3-test.txt', 'utf8').trimEnd();

const isValidNumber = (string) => {
    let num = Number(string);
    if (isNaN(num)) {return false};
    return true;
}

const getPossibleViableData = (inputType) => {
    let splitInput = testInput.split('mul(');
    let potentialData = []

    for (let i = 0; i < splitInput.length; i++) {
        if (isValidNumber(splitInput[i].charAt(0))) {
            potentialData.push(splitInput[i]);
        }
    };

    return potentialData;
};

const solve = () => {
    let multSum = 0;

    console.log(getPossibleViableData(testInput));

};

solve();