
import { FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import * as googlePhoneLib from 'google-libphonenumber';

const country = 'IL';



export function phoneNumberValidator(control: FormControl) : ValidationErrors | null {
    const phoneUtil = googlePhoneLib.PhoneNumberUtil.getInstance();

    if(!control.value ) 
      return null;
 
    if(!parseInt(control.value))  
      return {notAnIsraeliNumber:true} ;
   
   
    const isValid = phoneUtil.isValidNumberForRegion(phoneUtil.parse(control.value, country), country);
   

    return !isValid ? {
      notAnIsraeliNumber:true
    } : null;
}