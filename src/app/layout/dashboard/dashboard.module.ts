import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { CoverageComponent } from './coverage/coverage.component';
import { GaugeChartComponent } from './../components/gaugechart/gaugechart.component';

@NgModule({
  declarations: [DashboardComponent, ProfileComponent, SearchComponent, CoverageComponent, GaugeChartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxChartsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
