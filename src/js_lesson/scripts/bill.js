function calculateBill(billAmount,taxRate=0.13,tipRate=0.15) {
    console.log('Running calculate bill')
    console.log('billAmount:' + billAmount + 'taxrate:'+taxRate+'tipRate'+tipRate);
    const total=billAmount+billAmount * taxRate+billAmount*tipRate;
    return total;
}
/*calculateBill(100,0.13);
let billtotal=calculateBill(20+10+50+0.75)
console.log(billtotal);*/
calculateBill(100,undefined,0.66)
function yell(name='maheshwari') {
    return `Hey ${name.toUpperCase()}`

}
let greetings = yell()
console.log(greetings)