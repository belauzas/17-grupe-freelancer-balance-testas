const account = [
    { month: 10, income: 150 },
    { month: 1, income: 200, expense: 50 },
    { month: 3, income: 450, expense: 200 },
    { month: 7, expense: 50 },
    { month: 2, income: 50 },
    { month: 5, income: 150, expense: 50 },
    { month: 9, income: 700, expense: 400 },
    { month: 4, income: 10, expense: 300 },
    { month: 6, expense: 50 },
    { month: 11, income: 150, expense: 30 },
    { month: 8, income: 450, expense: 120 },
    { month: 12, expense: 200 }
];

account.sort(function (a, b) {
    return a.month - b.month;
  });
  console.log(account);

  let suma = 0;
  for (let i = 0; i<account.length; i++) {
      console.log(account[i].income);
      console.log(account[i].expense);
      suma += (account[i].income - account[i].expense);
  }
 console.log(suma);  // nelabai veikia del trukstamu income ir expense lauku...
 



export default account;