import { Injectable } from  '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
providedIn:  'root'
})

export  class  APIService {
  API_URL  =  'https://healthruwords.p.mashape.com/v1/quotes/?id=731&maxR=1&size=medium&t=Wisdom';
  constructor(private  httpClient:  HttpClient) {}
  getData(){
    console.log("something in api services")
      return  this.httpClient.get(this.API_URL);
  }
}  /* https://healthruwords.p.mashape.com/v1/quotes/?id=731&maxR=1&size=medium&t=Wisdom   http://localhost:8000*/

