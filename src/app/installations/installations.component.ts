
import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {status, STATUS } from '../mock-status';
//import * as $ from 'jquery';
declare var jQuery: any;
declare var $: any;

export interface Option {
  choice: string;
  color: string;
}


@Component({
  selector: 'app-installations',
  templateUrl: './installations.component.html',
  styleUrls: ['./installations.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class InstallationsComponent implements OnInit {
  //node: status[] = [];

  colorControl = new FormControl('', [Validators.required]);
  options: Option[] = [
    {choice: 'Not started', color: 'ed596a'},
    {choice: 'Started', color: 'ffa649'},
    {choice: 'Done', color: '5991ea'}
  ];


  //panelColor = new FormControl('Not-started');

  setChanges(id: any, change: any) {
    console.log("change to database here! ")
  }


  constructor() { }
  public isCollapsed1 = false;
  
  datas = ['1', '2', '3', '4', '5','6', '7','8'];


  //memos: Memo[] = [];

  status = ["Not-started", "Started", "Done"];
  change: string = '';
  selectChangeHandler (event: any) {
    this.change = event.target.value;
  }


  comment = ['This is difficult'];
  //memos: Memo[] = [];
  addComment(newComment: string) {
    console.log("add new comment" + newComment)
    if (newComment) {
      this.comment.push(newComment);
    }
  }
  private themeWrapper = document.querySelector('body');
  global(stylesheet) {
    console.log("stylesheet: "+stylesheet);
    
    // Card Styles
    if (stylesheet.globalCardColor) {
      this.themeWrapper.style.setProperty('--cardColor', stylesheet.globalCardColor);
    }
    if (stylesheet.globalNavBackground) {
      this.themeWrapper.style.setProperty('--cardBackground', stylesheet.globalCardBackground);
    }
  }

  
  ngOnInit() {
    $(document).ready(function(){
    $( ".resizeDiv" ).each(function(obj ) {
      $(this)[0].style.resize = "both";
    });
    //document.getElementById("myDIV").style.resize = "both";
    });
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
