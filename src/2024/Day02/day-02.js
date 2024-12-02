import { parseData, findTotalSum } from '../../utils.js'

const input = parseData('./input-02.txt')

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

const solve = () => {
    // let safeReportCount = 0;
    // let report = [];

    // for (let i = 0; i < input.length; i++) {
    //     report = splitReport(input[i]);
        
    //     if (isSafe(report)) {
    //         safeReportCount += 1;
    //     }
    // };

    console.log('47' - '49');

    let reportTest = [28, 27, 24, 22, 19];
    // console.log(isIncreasing(reportTest));
    // console.log(isDecreasing(reportTest));
    // console.log(levelsAreValid(reportTest));
    // console.log(input);

    // Answer: How many reports are safe?
    // console.log(safeReportCount);
};

solve();