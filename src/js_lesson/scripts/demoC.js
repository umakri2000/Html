/*const doc = doctorize('maheshwari')
console.log(doc);
function doctorize(firstName){
    return `Dr.${firstName}`
}*/
//Function Expression
/*const doctorize =function(firstName) {
    return `Dr.${firstName}`
}
//Anon function
function (firstName){
    return `Dr.${firstName}`;
}
const doc=doctorize('maheshwari')
console.log(doc);*/
//arrow functions
/*const inchToCM = inches => { // function has one parameter only
    console.log(inches);
    return inches*2.54;
};
const resultcm=inchToCM(10)
console.log(resultcm)*/
/*const funA = ()=>{
    console.log(`hi`);
};
funA();
const add=(a,b =3)=>a+b;// if the function has multiple parameter put in paranthesis
const inTocm= inches=> inches*2.54;
console.log(add(100));
console.log(inTocm(25));
const makeAPerson = (first,last) => ({name:`${first}${last}`,age:0});
const person = makeAPerson('maheshwari','krishnan');
console.log(person)*/
//-----------Immediately Invoked Function Expression------
(function(age){ //parantheses run first i js so we have wrapped the function in paranthesese
    console.log(`you are cool and your age is ${age}`);

} )(10);//---------loaded only once  and is used for preprocessor ------