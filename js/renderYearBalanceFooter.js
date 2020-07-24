function renderYearBalanceFooter(data, selector) {
    const DOM = document.querySelector(selector);
    let income = 0,
        expense = 0;
    for(let i = 0; i < 12; i++) {
        income += (data[i].income) ? data[i].income : 0;
        expense += (data[i].expense) ? data[i].expense : 0;
    }
    
    
    
    
    //total income, expense, balance;
    let HTML = `<div class="cell"></div>
                <div class="cell"></div>
                <div class="cell">${income.toFixed(2)} Eur</div>
                <div class="cell">${expense.toFixed(2)} Eur</div>
                <div class="cell">${(income-expense).toFixed(2)} Eur</div>`;
    return DOM.innerHTML = HTML;
}

export default renderYearBalanceFooter;