
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, OnInit  } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CdkTableModule} from '@angular/cdk/table';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import 'hammerjs';
import { HttpModule } from '@angular/http';
import { CalendarModule } from 'angular-calendar';
/** */
import { HttpClientModule  } from  '@angular/common/http';
import {CdkTreeModule} from '@angular/cdk/tree';


/**/
import 'flatpickr/dist/flatpickr.css';
import { CommonModule } from '@angular/common';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import { FlatpickrModule } from 'angularx-flatpickr';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {
  MatAutocompleteModule,
  MatOptionModule,
  MatFormFieldModule,
  MatSelectModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatCardModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//   OWN FILES
import { AppComponent } from './app.component';
import { SitesComponent } from './something/sites.component';
import { SiteDetailComponent } from './site-detail/site-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { Site } from './site'; 
import { SiteService } from './site.service';
import { Memo } from './memo'; 
import { MemoService } from './memo.service';
import { DataService } from './quote.service';
import { TestService } from './service/test.service';
import { AuthenticationService } from './service/auth.service';
import { MyNewServiceService } from './my-new-service.service'

// PAGES
import { OverviewComponent } from './overview/overview.component';
import { MemoboxComponent } from './overview/memobox.component';
import { InstallationsComponent } from './installations/installations.component';
import { TestComponent } from './test/test.component';
import { DocumentationsComponent } from './documentations/documentations.component';
import { SystemOverviewComponent } from './system-overview/system-overview.component';
import { TestPeriodComponent } from './test-period/test-period.component';
import { EducationComponent } from './education/education.component';
import { CustomersComponent } from './customers/customers.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SitesSidebarComponent } from './sites-sidebar/sites-sidebar.component';

const routes: Routes =[
  {
    path: '', 
    redirectTo: 'overview', 
    pathMatch: 'full' 
  },
  {
    path: 'overview', component: OverviewComponent},
  {
    path: 'installations', component: InstallationsComponent },
  {
    path: 'test', component: TestComponent   },
  {
    path: 'documentations', component: DocumentationsComponent   },
  {
    path: 'systemOverview', component: SystemOverviewComponent   },
  {
    path: 'testPeriod', component: TestPeriodComponent   },
  {
    path: 'education', component: EducationComponent   },
  {
    path: 'customers', component: CustomersComponent   },
  {
    path: 'statistics', component: StatisticsComponent   },
  
];

const materialModules = [
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule
];

@NgModule({
  declarations: [
    AppComponent,/*
    Site,
    SiteService,
    Memo,
    MemoService,*/
    OverviewComponent,
    MemoboxComponent,
    InstallationsComponent,
    SitesComponent,
    SiteDetailComponent,
    MessagesComponent,
    TestComponent,
    DocumentationsComponent,
    SystemOverviewComponent,
    TestPeriodComponent,
    EducationComponent,
    CustomersComponent,
    StatisticsComponent,
    SitesSidebarComponent,
  ],
  imports: [  
    HttpClientModule,
    CdkTreeModule,
    BrowserModule,
    MatTreeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,CommonModule,
    FormsModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot(),
    ReactiveFormsModule,
    MatTableModule,
    BrowserModule,
    MatSortModule,
    MatOptionModule,
    FormsModule,    
    MatIconModule,
    MatButtonModule, 
    MatCheckboxModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatExpansionModule,
    BrowserModule, FormsModule, MatListModule, MatExpansionModule, MatSortModule, BrowserAnimationsModule, MatPaginatorModule, MatInputModule,
    
    AppRoutingModule
  ],
  exports: [
    CdkTableModule,
    MatOptionModule,
    CdkTreeModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    
  ],

  providers: [AuthenticationService, TestService, DataService, MyNewServiceService],
  bootstrap: [AppComponent]
})

export class AppModule { }
export class PizzaPartyAppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
