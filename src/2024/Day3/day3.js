import { parseData, findTotalSum, parseArrayIntoInt } from '../../utils.js'
import { readFileSync } from 'fs';

const input = readFileSync('./input3.txt', 'utf8').trimEnd();
const testInput = readFileSync('./input3-test.txt', 'utf8').trimEnd();

const isValidNumber = (string) => {
    let num = Number(string);
    if (isNaN(num)) {return false};
    return true;
}

const splitData = (inputType) => {
    let splitInput = inputType.split('mul(');
    let newData = []

    for (let i = 0; i < splitInput.length; i++) {
        if (splitInput[i].includes(')')) {
            newData.push(...splitInput[i].split(')'))
        }
    };

    return newData;
};

const getValidData = (inputType) => {
    let separatedData = splitData(inputType);
    let validData = [];

    for (let i = 0; i < separatedData.length; i++) {
        if (separatedData[i] != '' && !separatedData[i].includes(' ') && separatedData[i].includes(',') && isValidNumber(separatedData[i].charAt(0)) && isValidNumber(separatedData[i].charAt(separatedData[i].length - 1))) {
            validData.push(separatedData[i]);
        }
    };

    return validData;
}

const getProductFromString = (string) => {
    let parsedNumbers = parseArrayIntoInt(string.split(','));
    return parsedNumbers[0] * parsedNumbers[1];
}

const solve = () => {
    let multSum = 0;

    let data = getValidData(testInput);

    for (let i = 0; i < data.length; i++) {
        multSum += getProductFromString(data[i]);
    };
    
    console.log(multSum);

};

solve();