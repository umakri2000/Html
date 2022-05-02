import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import{rangeValidators,emailMatchValidator} from '../my-validator'
@Component({
  selector: 'app-emlpoyee-form',
  templateUrl: './emlpoyee-form.component.html',
  styleUrls: ['./emlpoyee-form.component.css']
})
export class EmlpoyeeFormComponent implements OnInit {
  employeeFormGroup: FormGroup ;
  empRecord:any={
    name:'umakrishan',
    mobilenumber:349346734
  }
  constructor(private fb: FormBuilder) {
    this.employeeFormGroup = this.fb.group({
      firstName: ['',[Validators.required,Validators.minLength(3)]],
      lastName: ['',[Validators.required,Validators.minLength(3)]],
      emailGroup: this.fb.group({
        email: ['',[Validators.required,Validators.email]],
        confirmEmail: ['',[Validators.required,Validators.email]],
      },{validators:emailMatchValidator}),
      mobile: [''],
      sendNotification: ['email'],
      range: ['',[rangeValidators(10,20)]]
    })
  }

  ngOnInit(): void {
   
}
/**! is non null assertion operator ([ost -fix expression])
 * - it just saying to type checker that you're sure that  a is not a null or undefined
 * the operation !a produces a value of the type of a with null and undefined excluded 
 * if a  of is string  then 'a!' ensure that it will return a string value ,an not Null
 */
get firstName() {return this .employeeFormGroup.get('firstName')!;}
get lastName() {return this .employeeFormGroup.get('lastName')!;}
get range(){return this.employeeFormGroup.get('range')!;}
get email() {return this .employeeFormGroup.get('email')!;}
get emailGroup() {return this .employeeFormGroup.get('emailGroup')!;}
get mobile() {return this .employeeFormGroup.get('mobile')!;}

loadEmployee(){
  let data={
    firstName:'kris',
    lastName:'krish'
  }
  this.employeeFormGroup.patchValue(data);
  }
  doNotficiation(msgtype:any){
    if(msgtype== 'sms'){
      let mobileControl=this.employeeFormGroup.get('mobile');
      mobileControl?.setValidators([Validators.required,rangeValidators(800000,9999999)]);
      mobileControl?.updateValueAndValidity();
      

    }

  }
}



