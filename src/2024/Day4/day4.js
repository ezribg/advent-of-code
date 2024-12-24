import { parseData, findTotalSum } from '../../utils.js'

// const input = parseData('./input4.txt');
const testInput = parseData('./input4-test.txt');


const getCount = (data) => {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        let splitString = data[i].split("XMAS");

        count += splitString.length - 1;
    }

    return count
}

const reverseData = (data) => {
    let newData = [];

    for (let i = 0; i < data.length; i++) {
        newData.push(data[i].split('').reverse().join(''));
    }

    return newData;
}

const getVerticalData = (data) => {
    let newData = [];

    for (let i = 0; i < data[0].length; i++) {
        newData[i] = "";
    }

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            newData[j] += data[i][j];
        }
    }

    return newData;
}


// IDK MAN
// const getDiagonalDataLeftToRight = (data) => {
//     let newData = [];

//     // let row = 0;
//     for (let i = 0; i < data[0].length; i++) {
//         let diagonalString = `${data[0][i]}`

//         for
        
//     }
// }

const getAllDirectionCounts = (data) => {
    let count = 0;

    // Horizontal
    count += getCount(data);
    count += getCount(reverseData(data));

    // Vertical
    let verticalData = getVerticalData(data);
    count += getCount(verticalData);
    count += getCount(reverseData(verticalData));

    // Diagonal

    return count;
}

const cleanData = (data) => {
    for (let i = 0; i < data.length; i++) {
        data[i] = data[i].replace('\r', '');
    }

    return data;
}

const solve1 = () => {
    let data = cleanData(testInput);

    // console.log(getAllDirectionCounts(testInput));
    console.log(testInput.map((a, i) => a[i]))
};

solve1();