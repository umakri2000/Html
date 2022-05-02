import{ AbstractControl } from'@angular/forms'
export function rangeValidators(min:any,max:any){
    return function(c:AbstractControl):{[key:string]:boolean} | null{
if (c.value<min ||c.value>max){
    return {'range':true};
}
return null;
    }
}
export function emailMatchValidator(c:AbstractControl):{[key: string]:boolean}|null {
    let emailControlValue = c.get('email')!.value;
    console.log(emailControlValue);
    let ConfirmEmailControlValue = c.get('confirmEmail')!.value;
    if(emailControlValue !== ConfirmEmailControlValue){
        return {'match':true};
    }
    return null;    
}
