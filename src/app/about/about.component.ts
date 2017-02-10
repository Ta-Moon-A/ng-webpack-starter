import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
   selector : 'about',
   styleUrls : ['./about.component.scss'],
   templateUrl : './about.component.html'
})

export class AboutComponent implements OnInit {
   @Input() name : string = 'Component';
   @Output() nameChanged : EventEmitter<any> = new EventEmitter();

   constructor(private routes : Router, private activatedRoute : ActivatedRoute){}

   ngOnInit() : void{
       this.activatedRoute.params.subscribe(
           (params : any) => {
               console.log(params);
           }
       );
 }

   onClick(){
        console.log('click in about');
        this.nameChanged.emit("About Component Click");
       
   }
}