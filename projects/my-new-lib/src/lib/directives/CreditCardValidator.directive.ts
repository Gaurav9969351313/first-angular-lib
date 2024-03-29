import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator, FormControl } from '@angular/forms';

@Directive({
  selector: '[validCreditCard]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: CreditCardValidator, multi: true }
  ]
})
export class CreditCardValidator implements Validator {

  validate(c: FormControl): ValidationErrors | null {
    return CreditCardValidator.validateCcNumber(c);
  }

  static validateCcNumber(control: FormControl): ValidationErrors | null {
    // 5555555555554444 // 4111111111111111 
    if (!(control.value.startsWith('37')
      || control.value.startsWith('4')
      || control.value.startsWith('5'))
    ) {
      // Return error if card is not Amex, Visa or Mastercard     
      return { creditCard: 'Your credit card number is not from a supported credit card provider' };
    } else if (control.value.length !== 16) {
      console.log(control.value)
      // Return error if length is not 16 digits
      return { creditCard: 'A credit card number must be 16-digit long' };
    }
    // If no error, return null  
    return null;
  }
}