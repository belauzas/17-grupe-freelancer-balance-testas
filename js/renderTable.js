

function renderTable(selector, data, month) {
    const dataLength = data.length;
    const DOM = document.querySelector(selector);
    let HTML = '';
    DOM.innerHTML = '';

    //console.log(data);

    for(let i = 0; i < dataLength; i++){
        let income = data[i].income;
        let expense = data[i].expense;
        let balance = 0;
        if(typeof income === "number" && typeof expense === "number") {
            balance = income - expense;
        } else {
            if(income === undefined) {
                income = "-";
                balance = expense * (-1);
            }
            if(expense === undefined) {
                expense = "-";
                balance = income;
            }
        }
            
        HTML += `<div class="table-row">
                    <div class="cell">${i+1}</div>
                    <div class="cell">${month[data[i].month]}</div>
                    <div class="cell">${data[i].income === undefined? "-" : data[i].income+".00 Eur"}</div>
                    <div class="cell">${data[i].expense === undefined? "-":data[i].expense+".00 Eur"}</div>
                    <div class="cell">${typeof balance === "sintrg"? balance: balance+".00 Eur" }</div>
                </div>`;
    }
    return DOM.innerHTML = HTML;
}

export default renderTable;