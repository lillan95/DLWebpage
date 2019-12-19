import { Component, OnInit } from '@angular/core';
import { Site } from '../site';
import { SITES } from '../mock-sites';
 
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent implements OnInit {
 
  sites = SITES;
 
  selectedSite: Site;

 
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(site: Site): void {
    this.selectedSite = site;
    
  console.log('somethings happening');
  }
}