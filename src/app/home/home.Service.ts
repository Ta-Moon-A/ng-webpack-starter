import { Observable } from 'rxjs/Rx';
import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HomeService{
    
    constructor(public http : Http ){

    }

    getGreetingMessage() : Observable<Response>{
       return  this.http.get('app/home/home-date.json');
    }
}