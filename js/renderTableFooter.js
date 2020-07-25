function renderTableFooter(selector, data){

    const dataLength = data.length;
    const DOM = document.querySelector(selector);

    let incomeSum=0, expenseSum=0, balacne=0;

    for(let i=0;i<dataLength;i++) {
        if(typeof data[i].income === "number") {
            incomeSum += data[i].income;
            balacne += data[i].income;
        }
        if(typeof data[i].expense === "number") {
            expenseSum += data[i].expense;
            balacne -= data[i].expense;
        }
    }   

    let HTML = `
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell">${incomeSum}.00 Eur</div>
    <div class="cell">${expenseSum}.00 Eur</div>
    <div class="cell">${balacne}.00 Eur</div>
    `;
    console.log("renderTableFooter");
    return DOM.innerHTML = HTML;
}
export default renderTableFooter;