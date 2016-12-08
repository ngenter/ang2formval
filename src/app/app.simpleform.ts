import { Component } from '@angular/core';

@Component({
  selector: 'simple-form',
  templateUrl: './app.simpleform.html'
})
export class SimpleFormComponent {

//  Here we are implementing the submitForm function.  All we are doing for right now is spitting out the details of the form to our console.  
  submitForm(form:any): void{
    console.log('Form Data: ');
    console.log(form);
  }
}