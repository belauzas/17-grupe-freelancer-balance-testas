function renderTableFooter(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    console.log(data);

    let totalIncome = 0;
    let totalExpense = 0;
    let totalBalance = 0;

    for (let i = 0; i < data.length; i++) {
        data[i].income == undefined ? data[i].income = 0 : data[i].income;
        data[i].expense == undefined ? data[i].expense = 0 : data[i].expense;
        totalIncome += data[i].income;
        totalExpense += data[i].expense;
        totalBalance += (data[i].income - data[i].expense);
    }

    HTML = `<div class="cell"></div>
            <div class="cell"></div>
            <div class="cell">${totalIncome} Eur</div>
            <div class="cell">${totalExpense} Eur</div>
            <div class="cell">${totalBalance} Eur</div>`

    return DOM.innerHTML = HTML;
}

export default renderTableFooter;