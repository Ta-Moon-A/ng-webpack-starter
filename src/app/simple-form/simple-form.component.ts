import {
  Component,
  OnInit
} from '@angular/core';

import {
   FormGroup
} from '@angular/forms';

@Component({
  selector: "simple-form",
  templateUrl: './simple-form.component.html'
})

export class SimpleFormComponent {
   firstname : string = "tamo";
   Age : number = 25;

   onSubmit(simpleForm){
    console.log(simpleForm);
   }
}
