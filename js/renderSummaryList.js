function renderSummaryList(data, selector){
    const DOM = document.querySelector(selector);
    let incomeMin = 999999999999,
        incomeMax = 0,
        expenseMin = 999999999999,
        expenseMax = 0,
        incomeMinMonth = '',
        incomeMaxMonth = '',
        expenseMinMonth = '',
        expenseMaxMonth = '';
    for(let i = 0; i < 12; i++) {
        if (data[i].income){
            if (incomeMin > data[i].income){
                incomeMin = data[i].income;
                incomeMinMonth = data[i].monthWord;
            }
            if (incomeMax < data[i].income){
                incomeMax = data[i].income;
                incomeMaxMonth = data[i].monthWord;
            }
            if (expenseMin > data[i].expense){
                expenseMin = data[i].expense;
                expenseMinMonth = data[i].monthWord;
            }
            if (expenseMax < data[i].expense){
                expenseMax = data[i].expense;
                expenseMaxMonth = data[i].monthWord;
            }
        }
    }



    
    let HTML = `<div class="item">
                    <div id="minIncome" class="value">${incomeMinMonth}</div>
                    <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>
                </div>
                <div class="item">
                    <div class="value">${incomeMaxMonth}</div>
                    <div class="title">mėnuo, kai buvo daugiausiai uždirbta</div>
                </div>
                <div class="item">
                    <div class="value">${expenseMinMonth}</div>
                    <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui</div>
                </div>
                <div class="item">
                    <div class="value">${expenseMaxMonth}</div>
                    <div class="title">mėnuo, kai buvo didžiausios išlaidos</div>
                </div>`;
    return DOM.innerHTML = HTML;
}

export default renderSummaryList;