import { initData } from './initData';
import { render } from './render';

const isValidRow = (rowData) => {

    const value = rowData[3];

    if (!isNaN(Number(value))) {
        return true;
    }


    return false;
}

const composeObject = (data) => {

    // get headers of table
    const headers = file[0].split(',').map(header => {
        return header.toLowerCase()
    });

    // map headers to data
    const result = data.map(row => {
        let object = {};
        headers.map((item, index) => {
            object[item] = row[index];
        });

        return object;
    });

    return result;
}

const totalSum = (data, row) => {
    return data.reduce(
        (sum, item) => { return sum + Number(item[row]) },
        0
    ).toFixed(2);
}

const groupByRow = (data, row) => {

    let object = {};

    data.forEach(item => {
        const key = item[row];

        if (Object.keys(object).indexOf(key) == -1) {
            object[key] = [];
        }
        object[key].push(item);
    });

    return object;
}

const averageByType = (data, type) => {

    const count = data.length;
    const totalSumByType = totalSum(data, type);

    return (totalSumByType / count).toFixed(2);
}

const averageObject = (data, key) => {

    let object = [];

    for (let index in data) {
        object.push({
            [key]: index,
            average: averageByType(data[index], 'amount')
        });
    }

    return object;
}




const file = initData.split('\n');

const rowsPrepared = composeObject(
    file.map(row => {
        return row.split(',').map(
            item => {
                return item.trim();
            });
    })
        .filter(isValidRow)
);

// calculation
const total = totalSum(rowsPrepared, 'amount');
const averageByMonth = averageObject(groupByRow(rowsPrepared, 'month'), 'month');
const averageByDepartment = averageObject(groupByRow(rowsPrepared, 'department'), 'department');

// rendering
render.init();
render.render.renderAllItems(total, averageByMonth, averageByDepartment);

