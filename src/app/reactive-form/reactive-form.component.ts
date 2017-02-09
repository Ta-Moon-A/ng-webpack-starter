import {
  Component,
  OnInit
} from '@angular/core';

import {
   FormGroup, FormControl, Validators
} from '@angular/forms';

@Component({
  selector: "reactive-form",
  templateUrl: './reactive-form.component.html',
  styleUrls : ['./reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit  {
   reactiveForm : FormGroup;

   constructor(){ }

   ngOnInit(){
       this.reactiveForm = new FormGroup({
           'firstname' : new FormControl("",Validators.compose([
               //this.nameRequiredValidator,
               //this.nameMinLengthValidator(5)
           ]), Validators.composeAsync([
               this.nameAsyncRequiredValidators
           ])) ,
           'lastname' : new FormControl(""),
           'age': new FormControl(0)
       });
    }

  nameAsyncRequiredValidators(control : FormControl){
      return  new Promise((resolve) => {
           setTimeout(()=>{
               if(!control.value){
                    resolve({
                        asyncRequired :true
                       
                    });
               }
               else{
                    resolve(null);
               }
           },1000);
      })
  }

  nameRequiredValidator(control : FormControl)
   {
       if(!control.value){
             return {
                 required :true
             }
       }  
       return null; 
   }

   nameMinLengthValidator(minValue : number)
   {
       return (control : FormControl) =>{
           if(control.value.length < minValue){
                  return {
                      minLength : true,
                      errorText : "min length error!"
                  }
           }
           return null;
       }
   }

   
   onSubmit()
   {
       console.log(this.reactiveForm);
   }

}