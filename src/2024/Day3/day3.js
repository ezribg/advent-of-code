import { parseData, findTotalSum, parseArrayIntoInt } from '../../utils.js'
import { readFileSync, writeFile } from 'fs';

const input = readFileSync('./input3.txt', 'utf8').trimEnd();
// const testInput = readFileSync('./input3-test.txt', 'utf8').trimEnd();
const validCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',']

const isValidNumber = (string) => {
    let num = Number(string);
    if (isNaN(num)) { return false };
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

const containsValidCharacters = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (!validCharacters.includes(string[i])) {
            return false;
        }
    }
    return true;
}

const getValidData = (inputType) => {
    let separatedData = splitData(inputType);
    let validData = [];

    for (let i = 0; i < separatedData.length; i++) {
        if (separatedData[i] != '' && separatedData[i] != ',' && separatedData[i].includes(',') && containsValidCharacters(separatedData[i])) {
            validData.push(separatedData[i]);
        }
    }

    return validData;
}

const getProductFromString = (string) => {
    let parsedNumbers = parseArrayIntoInt(string.split(','));
    return parsedNumbers[0] * parsedNumbers[1];
}

const removeDont = (string) => {
    let newString = `${string}`

    if (string.includes("don't()")) {
        newString = string.substring(0, string.indexOf("don't()"));
    }
    return newString;
}

const getExecutableData = () => {
    let data = input.split('do()');

    for (let i = 0; i < data.length; i++) {
        data[i] = removeDont(data[i]);
    }

    return data;
}

const solve1 = (inputData) => {
    let multSum = 0;

    let data = getValidData(inputData);

    for (let i = 0; i < data.length; i++) {
        multSum += getProductFromString(data[i]);
    };

    return multSum;

};

const solve2 = () => {

    let data = getExecutableData();

    let multSum = 0;

    for (let i = 0; i < data.length; i++) {
        multSum += solve1(data[i]);
    }

    console.log(multSum);

};

solve2();