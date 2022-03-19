/*function doSomeTask(){
    const x=100;
    const y=20;
    console.log('x:'+x+'y:'+y);
}
doSomeTask();
/*
th e ability to access the outer level scoped data
from the inner level scoped even after the function is terminated*/

/*function doSomeTask() {
    const x = 100 ;
    const y = 20 ;
    console.log( 'x: '+x+ 'y:' +y);
}
doSomeTask();
console.log("completed");

function outer() {
    const outerVar = 'hey i am the outer Var!';
    //console.log(outerVar);
    
    function inner() {
        const innerVar = 'hey i am the inner var!';
        console.log(innerVar);
        console.log(outerVar);
    }
     inner();*/ // call to inner () from outer()
    //console.log(innerVar); // uncaught ReferenceError:inerVar is not defined
    //return inner;
//}
//outer();
//inner();
//const innerfunc=outer();
//innerfunc();
//
/*function createGreeting(greeting=''){
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet}${name}`;
    }
}
//-----
/*function createGreetings(greeting = '' ) {
    const myGreet = greeting.toUpperCase();
    return function(name) {
        return `${myGreet} ${name}` ;
    }
}
const result = createGreetings('welcome');
console.log(result('umakrishnan'));*/
function createGame(gameName) {
    //console.log(gameName);
    let score = 0;
    //console.log(score)
    return function win() {
      score++;
      return`Your name ${gameName} score is ${score}`;
    }
  }
  /* let result=createGame('football')
   console.log(result('win'));
  // console.log(result);*/
  const hockeyGame=createGame("hockey");
  console.log(hockeyGame('win'));
  const soccerGame=createGame("soccer");
  console.log(soccerGame('win'));
  const hockeyGame=createGame("hockey");
  console.log(hockeyGame('win'));
  const soccerGame=createGame("soccer");
  console.log(soccerGame('win'));

  hockeyGame();
  hockeyGame();
  hockeyGame();
  soccerGame();




