import renderRow from './renderRow.js';

function renderTableRows(selector, data, monthsArray) {

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i].month < data[j].month) {
                const temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += renderRow(data[i], monthsArray[i]);
    }

    return DOM.innerHTML = HTML;
}

export default renderTableRows;