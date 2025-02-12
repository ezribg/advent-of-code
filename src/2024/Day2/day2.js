import { parseData, findTotalSum } from '../../utils.js'

const input = parseData('./input2.txt');
// const input = parseData('./input2-test.txt');

const splitReport = (report) => {return report.split(' ')};

const isIncreasing = (report) => {
    let prevLevel = report[0];

    for (let i = 1; i < report.length; i++) {
        if (prevLevel >= report[i]) {
            return false;
        } else {
            prevLevel = report[i];
        }
    };

    return true;
};

const isDecreasing = (report) => {
    let prevLevel = report[0];

    for (let i = 1; i < report.length; i++) {
        if (prevLevel <= report[i]) {
            return false;
        } else {
            prevLevel = report[i];
        }
    };

    return true;
};

const isInvalidDifference = (a, b) => {
    const difference = Math.abs(a - b);
    return (difference < 1 || difference > 3);
};

const levelsAreValid = (report) => {
    let prevLevel = report[0];

    for (let i = 1; i < report.length; i++) {
        if (isInvalidDifference(prevLevel, report[i])) {
            return false;
        } else {
            prevLevel = report[i];
        }
    };

    return true;
};

const isSafe = (report) => {
    return ((isIncreasing(report) || isDecreasing(report)) && levelsAreValid(report));
};

const parseArrayIntoInt = (array) => {
    let parsedArray = []

    for (let i = 0; i < array.length; i++) {
        parsedArray.push(parseInt(array[i]));
    };

    return parsedArray;
}

const isSafeWithRemovedLevel = (report) => {

    for (let i = 0; i < report.length; i++) {
        let tempReport = [...report];
        tempReport.splice(i, 1);

        if (isSafe(tempReport)) {
            return true;
        }
    };

    return false;
}

const solve1 = () => {
    let safeReportCount = 0;
    let report = [];

    for (let i = 0; i < input.length; i++) {
        report = parseArrayIntoInt(splitReport(input[i]));
        
        if (isSafe(report)) {
            safeReportCount += 1;
        }
    };

    // Answer: How many reports are safe?
    console.log(safeReportCount);
};

const solve2 = () => {
    let safeReportCount = 0;
    let report = [];

    for (let i = 0; i < input.length; i++) {
        report = parseArrayIntoInt(splitReport(input[i]));

        if (isSafe(report) || isSafeWithRemovedLevel(report)) {
            safeReportCount += 1;
        };
    
    };

    console.log(safeReportCount);
};

solve2();