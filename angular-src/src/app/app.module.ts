import { BrowserModule }              from '@angular/platform-browser';
import { NgModule }                   from '@angular/core';
import { RouterModule, Routes }       from '@angular/router';
import { FormsModule }                from '@angular/forms';
import { HttpModule }                 from '@angular/http';
import { ValidateService }            from './services/validate.service';
import { AuthService }                from './services/auth.service';
import { FlashMessagesModule }        from 'angular2-flash-messages/module';
import { AuthGuard }                  from './guards/auth.guard';
import { AppComponent }               from './app.component';
import { NavbarComponent }            from './component/navbar/navbar.component';
import { LoginComponent }             from './component/login/login.component';
import { HomeComponent }              from './component/home/home.component';
import { DashboardComponent }         from './component/dashboard/dashboard.component';
import { RegisterComponent }          from './component/register/register.component';
import { ProfileComponent }           from './component/profile/profile.component';
import { NodejsComponent }            from './component/nodejs/nodejs.component';
import { AngularComponent }           from './component/angular/angular.component';
import { MongodbComponent }           from './component/mongodb/mongodb.component';




const appRoutes: Routes = [
   {path:'',                 component: HomeComponent},
   {path:'register',         component: RegisterComponent},  
   {path:'login',            component: LoginComponent},
   {path:'dashboard',        component: DashboardComponent, canActivate:[AuthGuard]},
   {path:'profile',          component: ProfileComponent, canActivate:[AuthGuard]},
   {path:'nodejs',           component: NodejsComponent},
   {path:'angular',          component: AngularComponent},
   {path:'mongodb',          component: MongodbComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    NodejsComponent,
    AngularComponent,
    MongodbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [ValidateService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
