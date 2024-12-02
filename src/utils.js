import { readFileSync } from 'fs';

export const parseData = (filePath) => {
    let input = readFileSync(filePath, 'utf8').trimEnd();
    return input.split('\n');
};

export const findTotalSum = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    };

    return sum;
};