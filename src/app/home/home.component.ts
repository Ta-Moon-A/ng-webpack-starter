import { Greeting } from './home.model';
import { Response } from '@angular/http';
import {
  Component,
  OnInit
} from '@angular/core';

import { HomeService } from './home.Service';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})



export class HomeComponent implements OnInit {

  aboutName : string = "home";
  testName : string = "";
  greeting : Greeting = <Greeting>{};
  
  constructor(public homeService: HomeService) {
      
  }

  public ngOnInit() {
    this.homeService.getGreetingMessage().subscribe(
       (response : Response) => {
         this.greeting = new Greeting (response.json());
       },
       (error : any)=>{
          
       },
       ()=>{

       })
  }

  onNameChange(){
    
    console.log('click in home');
  }
}
