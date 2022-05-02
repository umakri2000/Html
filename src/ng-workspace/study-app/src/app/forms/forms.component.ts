import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  
email:any;
  companylist=[
    {"companyname":"chainsys"},
  {"companyname":"infosys"},
];

genderlist=[{"gender":"male"},
             {"gender":"female"}];

  constructor() { }

  ngOnInit(): void {
 
      

  }
  onsus(myform:NgForm){
    console.log(myform);
  }
}
