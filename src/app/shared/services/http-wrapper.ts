import { Observable } from 'rxjs/Rx';
import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpWrapperService{
    
    apiUrl : string ='httpm://example.com/api';

    constructor(public http : Http ){

    }
  

    get(params) : Observable<Response>{
       return  this.http.get(this.apiUrl +'/home/home-date.json');
    }


    post(params) : Observable<Response>{
        var obj={
            username : "tamoona",
            password : "123123"
        }
       return  this.http.post(this.apiUrl +'/home/home-date.json',obj);
    }


    put(params) : Observable<Response>{
        var obj={
            username : "tamoona",
            password : "123123"
        }
       return  this.http.put('app/home/home-date.json?id=123',obj);
    }

    delete(params) : Observable<Response>{
       return  this.http.delete('app/home/home-date.json');
    }


    login(username, password) : Observable<Response>{
        var obj={
            username : username,
            password : password
        }
       return  this.post(obj);
    }

    


}