import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Site } from './site';
import { SITES } from './mock-sites';
import { MessageService } from './message.service';


import {Quote} from "./quotes"


@Injectable({
  providedIn: 'root'
})
export class SiteService {

  getSites(): Observable<Site[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('SiteService: fetched sites');
    return of(SITES);
  }
  constructor(private messageService: MessageService) { }
}
