import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LogementsComponent } from './logements/logements.component';
import { HeaderComponent } from './header/header.component';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StepsComponent } from './steps/steps.component';
import { BadgeModule } from 'primeng/badge';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  
  declarations: [
    AppComponent,
    LogementsComponent,
    HeaderComponent,
    SearchBarComponent,
    StepsComponent,
    SignupComponent
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    ButtonModule,
    TabMenuModule,
    ToolbarModule,
    FormsModule,
    CalendarModule,
    BadgeModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
