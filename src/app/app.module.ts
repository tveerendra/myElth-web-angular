import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { JwtInterceptor } from './common/helpers/jwt.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginService } from './services/login.service';
import { UsersService } from './services/users.service';
import { CoverageService } from './services/coverage.service';
import { ZipDetailsService } from './services/zipdetails.service';
import { ServiceListService } from './services/servicelist.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppRoutingModule,
  ],
  entryComponents: [],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    LoginService,
    UsersService,
    CoverageService,
    ZipDetailsService,
    ServiceListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
