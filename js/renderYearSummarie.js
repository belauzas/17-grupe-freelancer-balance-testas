function renderYearSummurie(selector, data, month) {
    const dataLength = data.length;
    const DOM = document.querySelector(selector);




    let biggestIncome = 0,  biMonth = 0;
    let lowestIncome = +Infinity,   liMonth = 0;
    let lowestExpense = +Infinity,  leMonth = 0;
    let biggestExpense = 0, beMonth = 0;
    for (let i = 0; i < dataLength - 1; i++) {
        if (typeof data[i].income === "number") {
            if (data[i].income < lowestIncome){
                lowestIncome = data[i].income;
                liMonth = i;
            }
            if (data[i].income > data[i + 1].income){
                biggestIncome = data[i].income;
                biMonth = i;
            }
        }
        if (typeof data[i].expense === "number") {
            if (data[i].expense < lowestExpense){
                lowestExpense = data[i].expense;
                leMonth = i;
            }
            if (data[i].expense > data[i + 1].expense){
                biggestExpense = data[i].expense;
                beMonth = i;
            }
        }
    }

    let HTML = `
                <div class="item">
                    <div id="minIncome" class="value">${month[data[liMonth].month]}</div>
                    <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>
                </div>
                <div class="item">
                    <div class="value">${month[data[biMonth].month]}</div>
                    <div class="title">mėnuo, kai buvo daugiausiai uždirbta</div>
                </div>
                <div class="item">
                    <div class="value">${month[data[leMonth].month]}</div>
                    <div class="title">mėnuo, kai buvo mažiausiai išlaidos, bet ne lygios nuliui</div>
                </div>
                <div class="item">
                    <div class="value">${month[data[beMonth].month]}</div>
                    <div class="title">mėnuo, kai buvo didžiausios išlaidos</div>
                </div>
    `;
    return DOM.innerHTML = HTML;
}
export default renderYearSummurie;