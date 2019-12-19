import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent }      from './app.component';
import { OverviewComponent }      from './overview/overview.component';
import { InstallationsComponent }      from './installations/installations.component';
import { TestComponent }      from './test/test.component';
import { DocumentationsComponent }      from './documentations/documentations.component';
import { SystemOverviewComponent }      from './system-overview/system-overview.component';
import { TestPeriodComponent }      from './test-period/test-period.component';
import { EducationComponent }      from './education/education.component';
import { CustomersComponent }      from './customers/customers.component';
import { StatisticsComponent }      from './statistics/statistics.component';



const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'installations', component: InstallationsComponent },
  { path: 'test', component: TestComponent },
  { path: 'documentations', component: DocumentationsComponent },
  { path: 'systemOverview', component: SystemOverviewComponent },
  { path: 'testPeriod', component: TestPeriodComponent },
  { path: 'education', component: EducationComponent },
  { path: 'customer', component: CustomersComponent },
  { path: 'statistics', component: StatisticsComponent }

];

@NgModule({ 
  imports: [
    CommonModule,
    RouterModule.forRoot(routes) 
  ], // 

  exports: [ RouterModule ]
})
export class AppRoutingModule {}