import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, NavbarComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    LayoutRoutingModule,
  ]
})
export class LayoutModule { }
