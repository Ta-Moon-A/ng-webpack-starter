import { ReflectMetadataDecoratorThrowsWithInvalidTargetWithoutTargetKey } from 'reflect-metadata/temp/test/spec';
import {Directive, ElementRef} from '@angular/core';

@Directive({
   selector : '[redization]'
})

export class RedizationDirective{
    constructor(private elementRef : ElementRef){
        this.elementRef.nativeElement.style.color = 'red';
    }

}