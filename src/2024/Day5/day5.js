import { parseData, findTotalSum } from '../../utils.js'

// const input = parseData('./input5.txt');
const testInput = parseData('./input5-test.txt');

let rules = [];
let updates = [];

const separateRules = (data) => {
    let key = data[0].substring(0,2);
    let valueArray = [];

    for (let i = 0; i < data.length; i++) {
        if (rules.has(key)) {

        }

        // if (data[i].substring(0, 2) != key) {
        //     rules.set(key, valueArray);
            
        //     key = data[i].substring(0,2);
        //     valueArray = [];
        // }

        // valueArray.push(data[i].substring(3));
    }
}

const separateData = (data) => {
    let updateIndex = 0;
    let tempRules = [];

    for (let i = 0; i < data.length; i++) {
        if (data[i] === '') {
            updateIndex = i + 1;
            break;
        }

        tempRules.push(data[i]);
    }

    separateRules(tempRules);

    for (; updateIndex < data.length; updateIndex++) {
        updates.push(data[updateIndex]);
    }
}

const solve1 = () => {
    // find the middle page number of every correctly ordered update, then add together
    separateData(testInput);
    console.log(rules);
    // console.log(updates);
    // console.log(testInput.indexOf(''))
};

// const solve2 = () => {

// };

solve1();
// solve2();