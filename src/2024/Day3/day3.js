import { parseData, findTotalSum } from '../../utils.js'
import { readFileSync } from 'fs';

const input = readFileSync('./input3.txt', 'utf8').trimEnd().split('');
const testInput = readFileSync('./input3-test.txt', 'utf8').trimEnd().split('');

const isValidNumber = (string) => {
    let num = Number(string);
    if (isNaN(num)) {return false};
    return true;
}

const getMulString = (data) => {
    let mulString = "";

    for (let i = 0; i < data.length; i++) {
        // Yes this is a nightmare but i dont care
        if (mulString === "" && data[i] === "m") {
            mulString += data[i]
        } else if (mulString === "m" && data[i] === "u") {
            mulString += data[i]
        } else if (mulString === "mu" && data[i] === "l") {
            mulString += data[i]
        } else if (mulString === "mul" && data[i] === "(") {
            mulString += data[i]
        } else {
            mulString = "";
        }
        // } else if (mulString.startsWith("mul(") && isValidNumber(data[i])) {
        //     mulString += data[i]
        // } else if (mulString.length)
    };

    return mulString;

}

const solve = () => {
    let multSum = 0;

};

solve();