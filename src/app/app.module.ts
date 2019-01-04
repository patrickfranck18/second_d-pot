import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SearchComponent } from './search/search.component';
import { OffrEmpComponent } from './offr-emp/offr-emp.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ConseilsComponent } from './conseils/conseils.component';
import {  CvComponent } from './cv/cv.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';

const appRoutes: Routes = [
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/signup', component: SignupComponent},
  {path: 'users', component: UserListComponent},
  {path: 'offr-emp', component: OffrEmpComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'conseils', component: ConseilsComponent},
  {path: 'cv', component: CvComponent},
  {path: 'entreprises', component: EntreprisesComponent}

] 

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    OffrEmpComponent,
    AccueilComponent,
    ConseilsComponent,
    CvComponent,
    EntreprisesComponent,
    CvComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthGuardService,
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
