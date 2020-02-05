import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {status, STATUS } from '../mock-status';

@Component({
  selector: 'app-documentations',
  templateUrl: './documentations.component.html',
  styleUrls: ['./documentations.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DocumentationsComponent implements OnInit {
    //node: status[] = [];
  
  
    panelColor = new FormControl('Not-started');
  
    
    constructor() { }
    public isCollapsed1 = false;
    
    datas = ['1', '2', '3', '4', '5','6', '7'];
  
  
    //memos: Memo[] = [];
  
    status = ["Not-started", "Started", "Done"];
    change: string = '';
  
  
    selectChangeHandler (event: any) {
      this.change = event.target.value;
    }
    
    ngOnInit() {
    }
  
    comment = ['This will be comments'];
    //memos: Memo[] = [];
    addComment(newComment: string) {
      console.log("add new memo" + newComment)
      if (newComment) {
        this.comment.push(newComment);
      }
    }


  /*   this.getData();
    }
  
    getSites(): Observable<Site[]> {
      // TODO: send the message _after_ fetching the heroes
      this.messageService.add('SiteService: fetched sites');
      return of(SITES);
    }
  
    getData(): void {
      this.siteService.getSites()
        .subscribe(sites => this.sites = sites);
     }
  */
  }
  