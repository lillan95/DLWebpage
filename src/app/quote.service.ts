import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import 'rxjs/add/observable/throw'

import { Site } from './site';
import { SITES } from './mock-sites';
import { Quote } from './quotes';


@Injectable({
  providedIn: 'root'
})



export class DataService {
  private _url: string = "https://favqs.com/api/qotd"

  constructor(private http: HttpClient) {}

  getQuote() :Observable<Quote[]> {
    return this.http.get<Quote[]>(this._url)
    .catch(this.errorHandler);
                
    }

    errorHandler (error: HttpErrorResponse) {
        return Observable.throw(error.message || "Server Error") 
    }
}
 