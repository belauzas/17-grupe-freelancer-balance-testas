'use strict';

function renderYearBalance(data, selector) {
    const DOM = document.querySelector(selector);

    let HTML = '';
    let correctOrder = data;
    for (let i = 0; i < 11; i++){
        for (let j = i+1; j<12; j++) {
            if (correctOrder[i].month > correctOrder[j].month){
                const temp = correctOrder[i];
                correctOrder[i] = correctOrder[j];
                correctOrder[j] = temp;
            }
        }
    }
    console.log(correctOrder);
    for (let i = 0; i < 12; i++){
        const income = (correctOrder[i].income) ? correctOrder[i].income : 0;
        const expense = (correctOrder[i].expense) ? correctOrder[i].expense : 0;
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${correctOrder[i].monthWord}</div>
                    <div class="cell">${(income > 0) ? (income).toFixed(2) : '-'}</div>
                    <div class="cell">${(expense > 0) ? (expense).toFixed(2) : '-'}</div>
                    <div class="cell">${(income-expense).toFixed(2)} Eur</div>
                </div>`;

    }

    return DOM.innerHTML = HTML;
}

export default renderYearBalance;