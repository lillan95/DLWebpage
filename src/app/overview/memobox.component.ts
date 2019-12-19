import { Component } from '@angular/core';

import { Memo } from '../memo';
import { MEMOS } from '../mock-memos';
import { MemoService } from '../memo.service';
//import { start } from 'repl';

@Component({
  selector: 'memobox',
  templateUrl: './memobox.component.html',
  styleUrls: ['./overview.component.css']
})

export class MemoboxComponent {
  memos = ['1', '2', '3', '4'];
  //memos: Memo[] = [];
  addMemo(newMemo: string) {
    console.log("add new memo")

  

    /*

  const start = async function() {
    const { Client } = require('pg.js')
    const client = new Client()

    await client.connect()

    const res = await client.query('SELECT $1::text as message', ['Hello world!'])
    console.log(res.rows[0].message) // Hello world!
    await client.end()}*/

/*    const myfunction = async function(x, y) {
      return [
        x,
        y,
      ];
    }
    
    // Start function
    const start = async function(a, b) {
      const result = await myfunction('test', 'test');
      
      console.log(result);
    }
    
    // Call start
    start('ettan', 'tvan');  start();*/
   
    if (newMemo) {
      this.memos.push(newMemo);
    }
  }

  constructor() { }
}

