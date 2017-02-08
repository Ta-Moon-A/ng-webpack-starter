import { 
    Component,
    OnInit ,
    Input,
    Output,
    EventEmitter,

} from '@angular/core';

import {
   ControlValueAccessor,
   NG_VALUE_ACCESSOR
} from '@angular/forms';

@Component({
   selector : 'bg-input',
   styleUrls : ['./bg-input.component.scss'],
   templateUrl : './bg-input.component.html',
   providers : [{
     provide : NG_VALUE_ACCESSOR,
     useExisting : BgInputComponent,
     multi : true
    }]
})

export class BgInputComponent implements ControlValueAccessor {

  @Input() labelName : string ="";
  private _value : string ="";
  private onChange = (value : string) => {}


   get value() : string{
    return this._value;
   }

   set value(value : string){
     this._value = value;
     this.onChange(this._value);
   }

   writeValue(obj: any): void{
        this.value = obj;
   }
      
   registerOnChange(fn: any): void{
        this.onChange = fn;
   }
    
   registerOnTouched(fn: any): void{
      
   }
    
    
   
}