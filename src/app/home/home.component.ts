import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: [ './home.component.css' ],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {

  aboutName : string= "about home";
  constructor() {

  }

  public ngOnInit() {
    console.log('Home component initialised');
  }
}
