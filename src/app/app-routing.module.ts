import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogementsComponent } from './logements/logements.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path : "", component : HeaderComponent},
  {path : "logements", component : LogementsComponent},
  {path : "signup", component : SignupComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
