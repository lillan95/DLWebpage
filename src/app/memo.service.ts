import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


import { Memo } from './memo';
import { MEMOS } from './mock-memos';


@Injectable({
  providedIn: 'root'
})
export class MemoService {

  getSites(): Observable<Memo[]> {
    return of(MEMOS);
  }
  constructor() { }
}
