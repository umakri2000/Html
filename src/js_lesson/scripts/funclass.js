function car (){
    let milesDriven =0;
    let speed = 0;
    this.accleration =(velocity,distance)=> {
        speed=+velocity;
        milesDriven+=distance;
    }
    this.getMilesDriven=()=>milesDriven;
    this.getSpeed=()=>speed;
}
const testCarModule=new car();
console.log('Miles:'+testCarModule.getMilesDriven());
console.log('speed:'+testCarModule.getSpeed());
/*testCarModule.speed=100;
testCarModule.milesDriven=10;
console.log('miles:'+testCarModule.getMilesDriven());
console.log('speed:'+testCarModule.getSpeed());*/
testCarModule.accleration(4,10);
console.log('Miles:'+testCarModule.getMilesDriven());
console.log('Miles:'+testCarModule.getSpeed());
