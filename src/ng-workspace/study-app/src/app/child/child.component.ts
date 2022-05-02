import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, ContentChild, AfterContentChecked, AfterContentInit, SimpleChange, SimpleChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit , OnDestroy,OnChanges,AfterContentChecked,AfterContentInit,AfterContentChecked,AfterViewInit,AfterContentChecked{
  counter=0;
  interval:any;
  @Input()
  name:string='';
 @ContentChild('projectedcontent')projectedcontent:any
  
  constructor() {
    console.log('child constructor is called' )
   }

  ngOnInit() {
    console.log('child ngOniit is called')
   //console.log(' chid oninit -'+this.projectedcontent)
  
//    this.interval=setInterval(() =>{
//     this.counter=this.counter+1;
//     console.log(this.counter);

//   },1000);
 }
  ngOnChanges(changes:SimpleChanges) {
    {
      console.log('child on changes works')
      console.log(changes)
    //console.log(' child onchanges -'+this.projectedcontent)


   }
  }
  ngDoCheck(): void {
    console.log('child do check is called');
  // console.log('child docheck -'+this.projectedcontent)

 }
  ngAfterContentInit() {
    console.log('child after content init is called')
    //console.log('after content -'+this.projectedcontent)

 }
 ngAfterContentChecked() {
  console.log('child after content checked is called')
  //console.log('after content -'+this.projectedcontent)
}
ngAfterViewInit(){
  console.log('child ngAfterViewInit')
}
ngAfterViewChecked(){
  console.log('AfterViewChecked is called')
}

  ngOnDestroy() {
    clearInterval(this.interval)
   console.log('child destroy component is called')

    
  }
  

}
