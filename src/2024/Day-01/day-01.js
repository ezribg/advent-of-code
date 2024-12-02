const fs = require('fs');

const input = fs.readFileSync('./input-01.txt', 'utf8').trimEnd();

// * Create and return left and right array from data
const parseData = () => {
    let inputLines = input.split('\n');

    let arrayLeft = [];
    let arrayRight = [];

    for (let i = 0; i < inputLines.length; i++) {
        let splitLine = inputLines[i].split("   ");
        arrayLeft.push(splitLine[0]);
        arrayRight.push(splitLine[1]);
    };

    return [arrayLeft, arrayRight];
};

const getSortedData = () => {
    let [unsortedLeft, unsortedRight] = parseData();

    let arrayLeft = sortIncreasing(unsortedLeft);
    let arrayRight = sortIncreasing(unsortedRight);

    return [arrayLeft, arrayRight];
}

const sortIncreasing = (array) => {
    return array.sort((a, b) => {return a - b});
}

const findDifference = (a, b) => {
    return Math.abs(a - b);
};

const findTotalSum = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    };

    return sum;
};

const countAppearances = (num, array) => {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {
            total += 1;
        }
    };

    return total;
};

const solve1 = () => {
    // 1) pair smallest number in left list w/ smallest number in right list, increase
    const [arrayLeft, arrayRight] = getSortedData();

    // 2) figure out how far apart numbers are
    let differences = [];

    for (let i = 0; i < arrayLeft.length; i++) {
        differences.push(findDifference(arrayLeft[i], arrayRight[i]));
    };

    // 3) add up distances and return total
    console.log(findTotalSum(differences));

};

const solve2 = () => {
    const [arrayLeft, arrayRight] = getSortedData();

    const similarityScores = [];

    // for each number in left list multiply by number of times it appears in right list
    for (let i = 0; i < arrayLeft.length; i++) {
        similarityScores.push(arrayLeft[i] * countAppearances(arrayLeft[i], arrayRight));
    };

    console.log(findTotalSum(similarityScores));

};