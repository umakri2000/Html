import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit, OnDestroy,DoCheck{
  showChild=true
  interval:any;
  name='';
  constructor() { 
    console.log(" parent constructor is called")
  }

  ngOnInit() {
console.log(' parent ngOnit is called')
  }
  ngDoCheck() {
    console.log('parent docheck  is called')
  }
  ngOnDestroy() {
    console.log(' parent ondestroyed is called')
    
  }
  ngOnChanges() {
    console.log('parent  onchange is called')
    
  }
  
  showButton()
  {
    this.showChild=!this.showChild
  }

}
