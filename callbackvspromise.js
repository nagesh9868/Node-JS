const lib = require('./lib')
let totalAmout = 2000;
let purchase = 200;

function debitedAmount()
{
   totalAmout = totalAmout - purchase;   
   console.log(`Remaining amount is ${totalAmout}`);
}

// lib.updateAmount('Tv', debitedAmount)

lib.promiseUpdateAmoun('Tv').then(debitedAmount)
