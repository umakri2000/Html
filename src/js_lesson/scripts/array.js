const names=['john','Sam','peter','divya'];
console.log(names[0]);
console.log(names.length);
console.log(names[names.length-1]);
/* the lower bound of an array is 0 
the upper bound of the array is length-1;
the index for john is 0
the index for sam is  1
the index for peter is 2 */
//methods of array
 names.push('Umakrishnan');
 console.log('after push :'+names);// push will add item at end
 const names2=[...names,'maheshwari'];//... is called spread operator and it represent entire array
 
 console.log('names2:'+names2);
 names.unshift('puppy');
 console.log('unshift:'+names);
 // unshift  add from starting of the array
 // so the index of the array changes now
 const names3 =['maheshwari',...names];
 console.log(names3);
 //thi will add data at the begining
 //slice () method it takes two parameters
 const bikes=['biachi','miele','benneto','panasonic','miyata'];
 const b1=[...bikes.slice(0,2)];
  console.log(b1)
  // it has copied the value from index 0 and assigned to b1
  const b2=[...bikes.slice(2)];
  console.log(b2);
  //it has copies last two value
  const newBikes=[
      ...bikes.slice(0,2),
      'benotto',
      ...bikes.slice(2)
  ];
  console.log('newBikes:'+newBikes);
  //new array called newBike is created then in index 0 and 1 values from bikes is copied usig the slice (0,2)methid .the first 2 values are copie d
  //then from the second index  new bike value is added the remaining arrays are copied using slice method
  //sl8ice (2)the values from index two is added
  const newBikes1=[...newBikes.slice (0,2),
    ...newBikes.slice(3)];
  //  console.log('newBikes2:'+newBikes1);
    const indexOfSam=names.findIndex(names=>names==='Sam');
   // console.log('indexOfSAM: ' + indexOfSam);
    //Write a function to declare name of array
    /*function deleteName(del_name){
        console.log(del_name);
       // let del_name
        const indexOfdel_name=names.findIndex(names=>names ==='del_name');
        console.log(indexOfdel_name)
      const newNames=[...names.slice(0,indexOfdel_name-1),...names.slice(indexOfdel_name+1)];
     // console.log(newNames)
    }
    deleteName('peter');*/
  /*  function deleteName(nametodelete,name)
    {
        const indexOfname=names.findIndex(n=>n===nametodelete);
        console.log('indexOfname to delete'+indexOfname);
        const newArray={
            ...names.slice(0,indexOfname),
            ...names.slice(findIndex+1)
        };
            return newArray;
    }*/
    
        
    
   // const deletedNames=deleteName('peter',names);
   ////console.log("After delete",deletedNames);
  // console.log("After delete",names); 
    const numbers=[1,2,3,4,5,6,7,8,9];
  /*  console.log(numbers);
    numbers.splice(3,4);
    //(method) array <number>.splice(start:number,deletecount?:number)
    //mutation method - modifies /deletes the value inthe source array
    //from the third index delete the next 2 values 
    //the values in numbers are modified are modified /deleted

    console.log(numbers);
    const pizzaSlice=numbers.slice(2,4);//start and end values
    console.log('pizzaSlices:'+pizzaSlice);
    //Immutable function - does not change the source array
    console.log('originalNumbers:'+numbers);*/
     /*numbers .reverse();//muttable function to avoid these create a cpoy of anotheer and work on it
     console.log(numbers);*/
     const numbersReversed = [...numbers].reverse();
     console.log(numbersReversed);
     //Iteration of loops//
     const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];


    const students = [
      {
        id: '11ce',
        first_name: 'Dall',
        last_name: 'Puckring',
      },
      {
        id: '2958',
        first_name: 'Margarete',
        last_name: 'Brandi',
      },
      {
        id: '565a',
        first_name: 'Bendicty',
        last_name: 'Woodage',
      },
      {
        id: '3a16',
        first_name: 'Micki',
        last_name: 'Mattes',
      },
      {
        id: 'f396',
        first_name: 'Flory',
        last_name: 'Gladeche',
      },
      {
        id: 'de5f',
        first_name: 'Jamill',
        last_name: 'Emilien',
      },
      {
        id: '54cb',
        first_name: 'Brett',
        last_name: 'Aizikowitz',
      },
      {
        id: '9135',
        first_name: 'Lorry',
        last_name: 'Smallman',
      },
      {
        id: '978f',
        first_name: 'Gilly',
        last_name: 'Flott',
      },
    ];

    const people = [
      {
        birthday: 'April 22, 1993',
        names: {
          first: 'Keith',
          last: 'Buckley'
        }
      },
      {
        birthday: 'January 3, 1975',
        names: {
          first: 'Larry',
          last: 'Heep'
        }
      },
      {
        birthday: 'February 12, 1944',
        names: {
          first: 'Linda',
          last: 'Bermeer'
        }
      }
    ];


    const buns = ['egg', 'wonder', 'brioche'];

    const meats = {
      beyond: 10,
      beef: 5,
      pork: 7
    };

    const prices = {
      hotDog: 453,
      burger: 765,
      sausage: 634,
      corn: 234,
    };

    const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

    const feedback = [
      { comment: 'Love the burgs', rating: 4 },
      { comment: 'Horrible Service', rating: 2 },
      { comment: 'Smoothies are great, liked the burger too', rating: 5 },
      { comment: 'Ambiance needs work', rating: 3 },
      { comment: 'I DONT LIKE BURGERS', rating: 1 },
    ];

    const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

    const inventory = [
      { type: 'shirt', price: 4000 },
      { type: 'pants', price: 4532 },
      { type: 'socks', price: 234 },
      { type: 'shirt', price: 2343 },
      { type: 'pants', price: 2343 },
      { type: 'socks', price: 542 },
      { type: 'pants', price: 123 },
    ];
    function logItemsInAnArray(items,index,originalArray){
        const nextitem=originalArray[index+1];
        const previtem=originalArray[index-1];
        //log the item
        console.log(items);
        //log the prev item if there is one 
        previtem? console.log('previtem:'+ previtem):null;
        //logthe next item if there is one 
        nextitem?console.log('nextitem:'+ nextitem):null;
        index ===originalArray.length-1
        ?
        console.log("goodbye")
        :console.log("getting the next item");
        console.log('----------❤----------');
    }
    console.log(toppings);
    toppings.forEach(logItemsInAnArray);
    function displayToppings(items){
        console.log('currentItems:'+ items);

    }
    toppings.forEach(displayToppings);
    console.log('-------❤---------')
    toppings .map(displayToppings);
    function addArms(face){
        return`😊 ${face} 🎈`;
    }
const toys=faces.map(addArms);
console.log(toys);
function orderIncrease(order)
{
    return order * 1.25;
}
    const newTotalNumber=orderTotals.map(orderIncrease);
    console.log(newTotalNumber)
    function tallyNumbers(prvNumber, currentNumber) {
        console.log(`The Total so far is ${prvNumber}`);
        console.log(`The Curent Number is ${currentNumber}`);
        console.log('- - - - - - - ');
        //return the current tally PLUS the amount of this order
        return prvNumber + currentNumber;
    }
    const allOrders = orderTotals.reduce(tallyNumbers,0);
    console.log('allOrders: '+ allOrders);




    



