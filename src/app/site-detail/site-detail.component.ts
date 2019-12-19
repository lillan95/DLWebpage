import { Component, OnInit, Input } from '@angular/core';
import { Site } from '../site';

import { SITES } from '../mock-sites';
 

@Component({
  selector: 'app-site-detail',
  templateUrl: './site-detail.component.html',
  styleUrls: ['./site-detail.component.css']
})
export class SiteDetailComponent implements OnInit {
  @Input() site: Site;
 

  constructor() { }

  ngOnInit() {
  }

}
