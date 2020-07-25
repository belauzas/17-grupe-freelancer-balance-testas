function renderSummary(selector, data, months) {
    let minIncome = +Infinity;
    let maxIncome = -Infinity;
    let minExpense = +Infinity;
    let maxExpense = -Infinity;
    let minIncomeId = 0;
    let maxIncomeId = 0;
    let minExpenseId = 0;
    let maxExpenseId = 0;

    const DOM = document.querySelector(selector);
    let HTML = "";

    for (let i = 0; i < data.length; i++) {
        if (data[i].income < minIncome && data[i].income != 0) {
            minIncome = data[i].income;
            minIncomeId = i;
        }
        if (data[i].income > maxIncome) {
            maxIncome = data[i].income;
            maxIncomeId = i;
        }
        if (data[i].expense < minExpense && data[i].expense != 0) {
            minExpense = data[i].expense;
            minExpenseId = i;
        }
        if (data[i].expense > maxExpense) {
            maxExpense = data[i].expense;
            maxExpenseId = i;
        }
    }

    HTML = `<div class="item">
                <div id="minIncome" class="value">${months[minIncomeId]}</div>
                <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui t.y. ${minIncome} Eur</div>
            </div>
            <div class="item">
                <div class="value">${months[maxIncomeId]}</div>
                <div class="title">mėnuo, kai buvo daugiausiai uždirbta t.y. ${maxIncome} Eur</div>
            </div>
            <div class="item">
                <div class="value">${months[minExpenseId]}</div>
                <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui t.y. ${minExpense} Eur</div>
            </div>
            <div class="item">
                <div class="value">${months[maxExpenseId]}</div>
                <div class="title">mėnuo, kai buvo didžiausios išlaidos t.y. ${maxExpense} Eur</div>
            </div>`;

    return DOM.innerHTML = HTML;
}
export default renderSummary;