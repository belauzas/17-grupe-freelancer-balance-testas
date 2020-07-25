import account from './data.js';
import renderTable from './renderTable.js';

const month = {
    1: 'sausis',
    2: 'vasaris',
    3: 'kovas',
    4: 'balandis',
    5: 'gegužė',
    6: 'birželis',
    7: 'liepa',
    8: 'rugpjūtis',
    9: 'rugsėjis',
    10: 'spalis',
    11: 'lapkritis',
    12: 'gruodis',
};

let data = account;
let swapped;
sortDataByMoth(data);

function sortDataByMoth(data) {
    do {
        let dataLength = data.length -1;
        swapped = false;
        for (let i = 0; i < dataLength; i++) {
            if (data[i].month > data[i + 1].month) {
                swapped = true;
                let temp = data[i + 1];
                data[i + 1] = data[i];
                data[i] = temp;
            }
        }
        dataLength--;
    } while (swapped)
}
console.log(data);


renderTable(".table-content", data, month);