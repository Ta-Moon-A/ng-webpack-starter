import { 
    Component,
    OnInit ,
    Input 
} from '@angular/core';

@Component({
   selector : 'about',
   styleUrls : ['./about.component.scss'],
   templateUrl : './about.component.html'
})

export class AboutComponent {
   @Input() name : string = 'Component';


   constructor()
   {
   
   }
}