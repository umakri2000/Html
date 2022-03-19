class Pizza {
    constructor(toppings=[],customer){
    this.toppings=toppings;
    this.customer=customer;

}
//static property
static extraToppings=['pepper','cheese'];
//static method
static sayThankyou(){
    console.log('Thankyou!!!')
}
//instance property
slices=10;
get noOfSlices(){
    return this.slices;
}
set noOfSlices(value)
{
    Slices=value;
    
}
getCokeorPepsi=()=>
{
    console.log('Coke');
    console.log('Pepsi');
    console.log(this);
}
//private fields can only be modified in class
#bankBalance=1000
get balance(){
    return this.#bankBalance;
}
set balance(value)
{
    this.#bankBalance=value;
}
eat(){
    console.log(this.toppings);
    console.log(this.customer);
}
}
const myLunch=new Pizza(['onion','chicken','capcicum'],'mahehswari');
console.log(myLunch);
myLunch.eat();
myLunch.toppings=['carrot','almonds'];
console.log(myLunch.toppings);
console.log(Pizza.extraToppings);
Pizza.extraToppings=['onion','lettuce'];
console.log(Pizza.extraToppings);
Pizza.sayThankyou();
myLunch.noOfslices=6;
console.log(myLunch.noOfSlices);
myLunch.getCokeorPepsi();
myLunch.balance=5000;
console.log(myLunch.balance);
/*myLunch.#bankBalace=2000;
console.log(myLunch.balance);*/