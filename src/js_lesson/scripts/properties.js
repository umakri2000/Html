var myobject = {
    // An ordinary data property
      $x: 0,
    // An accessor property defined as a pair of functions
    get data () { 
        console.log('get called');
        return this.x; },
    set data (value) {
        if(value<=0){
        throw new Error('value should be gretaer than 0');
            return 0;
        }
        this.x = value;
        console.log('set called');
     }
};
myobject.data = 100;
        console.log(myobject.data);
        myobject.x=5000;
        console.log(myobject.data);
        Object.defineProperty(o, "x", {
            value: 1,
            writable: true,
            enumerable: false,
            configurable: true
        });
        console.log(o.x);
        o.x=2999;
        console.log(o.x);  
        //
        var o={};
var p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
        get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
        enumerable: true,
        configurable: true
    }
});     