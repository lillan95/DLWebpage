import {HttpClient} from '@angular/common/http'


import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';
import {FormControl} from '@angular/forms';

import { Site } from './site';
import { SITES } from './mock-sites';
import { SiteService } from './site.service';

import {AuthenticationService} from "./service/auth.service";
/**/

import {TestService} from "./service/test.service";
import {Testerer} from "./test.model";
import {DataService} from "./quote.service"
import {Quote} from "./quotes"

import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { Observable } from 'rxjs/Observable';
import { inject } from '@angular/core/testing';
import { fromPromise } from 'rxjs/internal-compatibility';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};

interface myData {
  test1: number,
  test2: string 
};

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html', //
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
 
export class AppComponent  implements OnInit {

  //quote: any;
 
  clickedDay = new Date();
  /*viewDate: Date = new Date();
  events = [];*/
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: string = 'month';

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };
  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: 'A 3 day event',
      color: colors.red,
      actions: this.actions
    },
    {
      start: startOfDay(new Date()),
      title: 'An event with no end date',
      color: colors.yellow,
      actions: this.actions
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue
    },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: 'A draggable and resizable event',
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(private http: HttpClient, private modal: NgbModal,private siteService: SiteService, private _DataService: DataService, private authService: AuthenticationService, private testService: TestService) {}



  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    //console.log('app.compoents.ts 130.  data: '+ date)
    this.clickedDay = date;
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(this.clickedDay),
      end: endOfDay(this.clickedDay),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }


  title = 'Test sidan';
  date_today =  new Date();
  freeze_in = 9;
  sites: Site[] = [];
 
  selectedSite: Site;

  //constructor(private siteService: SiteService) { }
  
  


  panelColor = new FormControl('Not-started');

  public isCollapsed1 = false;
  
  datas = ['How to', 'Oracle','Postgres','dpWebmap'];


  //memos: Memo[] = [];

  status = ["Not-started", "Started", "Done"];
  change: string = '';


  selectChangeHandler (event: any, ) {
    this.change = event.target.value;
  }

  
  private quote :  any;
  public quotebody: any; 

  public errorMsg;

  testers: Testerer[];
  ngOnInit() {
    
    this.getSites();

    this.http.get(' https://favqs.com/api/qotd ')
    .subscribe((quote) => {
      this.quote = quote;
    })
    
    
    
  }

  getSites(): void {
    this.siteService.getSites()
      .subscribe(sites => this.sites = sites);
      //console.log('App.component.ts')
  }
  
  
  onSelect(site: Site): void {  // WHEN CLICKING THIS REACTS
    this.selectedSite = site;
    //console.log('klicking app.component.ts   ' + site.name);


  }
  
}
  


     