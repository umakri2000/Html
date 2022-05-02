import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name='umakrishnan';
  person:any;

showMsg(event:any)
{
  let x=document.getElementById('para') as HTMLParamElement;
  x.classList.toggle("text");// classlist add dynamically class
  console.log(x)

}
printval(event:any)
{
  console.log(event.target.value);// event.target.value target the value that event done
}
changeEvent(event:any)
{
  let y=document.getElementById('txt') as HTMLInputElement;
  console.log(event.target.value)
  console.log(y.value)
}

}