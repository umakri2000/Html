import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tgle',
  templateUrl: './tgle.component.html',
  styleUrls: ['./tgle.component.css']
})
export class TgleComponent implements OnInit {
btnToogle:boolean=true;
place = true;// ngIf example ngIf takes only true or false boolean

  constructor() {
  }
 

  ngOnInit(): void {
    setTimeout(() => {
      this.btnToogle=false
      
    },2000);
  } 
  details:Array<any> =[
    {
  'name':'uma',
   'age':34,
   'gender':'male',
   'martial-status':'single',
    'salary': '12,000',
    'available': true
   },
    {
  'name':'maheshwari',
   'age':34,
   'gender':'female',
   'martial-status':'single',
    'salary': '33,000',
    'available': true
   },
   {
    'name':'kaipulla',
     'age':53,
     'gender':'Male',
     'martial-status':'married',
      'salary': '43,000',
      'available': false
     }
  ] 
}

