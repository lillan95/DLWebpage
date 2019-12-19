import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';

import { MessageService } from '../message.service';


import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';

/**/

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None
})

@NgModule({
  imports: [BrowserAnimationsModule, CalendarModule.forRoot()]
})

export class MessagesComponent implements OnInit {
 


  panelColor = new FormControl('Not-started');

  public isCollapsed1 = false;
  
  datas = ['How to', 'Oracle','Postgres','dpWebmap'];


  //memos: Memo[] = [];

  status = ["Not-started", "Started", "Done"];
  change: string = '';

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}