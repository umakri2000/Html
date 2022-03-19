function addtion() {
     const x=100;
    const y=50;
    // console.log(x+y);
    // document.writeln(x+y);
    var resultElement =document.getElementById("result");
    resultElement.innerText=x+y;
    }
    
    function sum() {
     const x= parseInt(document.getElementById("firstvalue").value);
     const y= parseInt(document.getElementById("secondvalue").value);
     var resultElement =document.getElementById("result");
    resultElement.innerText=x+y;
    }
    function add(x,y){
     var resultElement =document.getElementById("result");
    resultElement.innerText=parseInt(x)+ parseInt(y);
    }
    function problem1() {
        let i=0;
        for(i=0;i<100;i++){
            console.log(i);
        }
    }
 function problem2() {
            let i=0;
            for( i=100;i>0;i--) {
                console.log(i);}
            }
 function problem3() {
                let i=0;
                for( i=100;i>0;i--) {
                    if(i%2==0){
                    console.log(i);}
                }
            }
 function printdigits(rev) {
               // let x = 945632672;
                let num = printdigits;
                let reminder = 0;
                while(num >= 1) {
                    if(!(num%2==0))
                    reminder = num % 10;
                    console.log(reminder );
                    num =parseInt(num / 10);
                 }
            }      
    