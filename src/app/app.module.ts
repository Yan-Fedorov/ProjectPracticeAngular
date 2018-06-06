import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CompanyService } from './company.service';
import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './user.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { LocalStorageService } from './local-storage.service';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { LoginComponent } from './login/login.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueOutComponent } from './catalogue-out/catalogue-out.component';
import {AuthInterceptor} from './Interceptor/Interceptor';
import {SignOut} from './SignOut';
import { TaskComponent } from './task/task.component';
import { UserCoursesService } from './user-courses.service';
import { CourseService } from './course.service';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EditUserComponent,
    HomeComponent,
    UserPageComponent,
    UserCoursesComponent,
    LoginComponent,
    CatalogueComponent,
    CatalogueOutComponent,
    TaskComponent,
    CompanyLoginComponent,
    CompanyRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CompanyService, UserService, SignOut, LocalStorageService, UserCoursesService, CourseService,
  {
  provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
  multi : true,
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
