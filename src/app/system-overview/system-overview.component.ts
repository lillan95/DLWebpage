import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {status, STATUS } from '../mock-status';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-system-overview',
  templateUrl: './system-overview.component.html',
  styleUrls: ['./system-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SystemOverviewComponent implements OnInit {
  
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
    
    comment = ['This will be comments'];
    //memos: Memo[] = [];
    addComment(newComment: string) {
      console.log("add new memo" + newComment)
      if (newComment) {
        this.comment.push(newComment);
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
  }