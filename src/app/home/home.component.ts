import { TextSplitPipe } from '../shared/pipes/text-split.pipe';
import { Greeting } from './home.model';
import { Response } from '@angular/http';
import {
  Component,
  OnInit
} from '@angular/core';

import { HomeService } from './home.Service';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})



export class HomeComponent implements OnInit {

  aboutName: string = "home";
  testName: string = "";
  greeting: Greeting = <Greeting>{};
  
  values: [{ name: string; age: number; }];
  valueString: string = "Hello Georgia";
  valueDate: Date = new Date();
  valueLongText: string = "Hello Bank of Georgia";

  value3: string = new TextSplitPipe().transform("Hlello BOG from ts", 2);

    showText : boolean = true;
    showNumber  : number = 2;

  constructor(public homeService: HomeService) {

  }

  public ngOnInit() {
    this.homeService.getGreetingMessage().subscribe(
      (response: Response) => {
        this.greeting = new Greeting(response.json());
      },
      (error: any) => {

      },
      () => {

      });

    this.values = [
      { name: "Niko", age: 24 },
      { name: "Vano", age: 25 },
      { name: "Gurami", age: 25 }
    ];
  }

  onNameChange() {

    console.log('click in home');
  }

  onbtnClick()
    {
           //console.log(this.showText);
           this.showText = !this.showText;
    }

   showTextArea()
   {
     console.log("show");
     return true;
   }
   
   printItem(item){
       console.log(item);
   }

   deleteItem(item){
      let index = this.values.indexOf(item);
      this.values.splice(index,1);
   }
}
