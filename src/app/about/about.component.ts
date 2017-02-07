import { 
    Component,
    OnInit ,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
   selector : 'about',
   styleUrls : ['./about.component.scss'],
   templateUrl : './about.component.html'
})

export class AboutComponent {
   @Input() name : string = 'Component';
   @Output() nameChanged : EventEmitter<any> = new EventEmitter();

   constructor(){}

   onClick(){
        console.log('click in about');
        this.nameChanged.emit("About Component Click");
       
   }
}