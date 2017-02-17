import { Observable } from 'rxjs/Rx';
import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpWrapperService } from '../shared/services/http-wrapper';




@Injectable()
export class HomeService{
    username : string="";
    password : string="";

    constructor(private httpWrapper : HttpWrapperService ){

    }
    
    getGreetingMessage() : Observable<Response>{
       return  this.httpWrapper.get('app/home/home-date.json');
    }

    // login() : Observable<Response>{
    //    this.httpWrapper.login(this.username, this.password).subscribe((response : any) => 
    //    {
    //      if(response.statusCode === 403){
    //         // todo logic
    //      }
         
    //      let token = response.responseData.token;
    //      document.cookie = 'token = ' + token +' expires';

    //    });
    // }

}