import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {EditUserComponent} from './edit-user/edit-user.component';
import {HomeComponent} from './home/home.component';
import {CatalogueComponent} from './catalogue/catalogue.component';
import {CatalogueOutComponent} from './catalogue-out/catalogue-out.component';
import {UserCoursesComponent} from './user-courses/user-courses.component';
import {UserPageComponent} from './user-page/user-page.component';
import {LoginComponent} from './login/login.component';
import {TaskComponent} from './task/task.component';
import {CompanyLoginComponent} from './company-login/company-login.component';
import {CompanyRegistrationComponent} from './company-registration/company-registration.component';
import {CompanyPageComponent} from './company-page/company-page.component';
import {EditCourseComponent} from './edit-course/edit-course.component';
import {AddCourseComponent} from './add-course/add-course.component';
import {UserNotificationComponent} from './user-notification/user-notification.component';
import {AddTasksComponent} from './add-tasks/add-tasks.component';

const routes: Routes = [
  {path: 'registration', component: RegistrationComponent},
  {path: 'edit-user', component: EditUserComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'catalogue', component: CatalogueComponent},
  {path: 'catalogueOut', component: CatalogueOutComponent},
  {path: 'user-courses', component: UserCoursesComponent},
  {path: 'user-page', component: UserPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'companyLogin', component: CompanyLoginComponent},
  {path: 'task', component: TaskComponent},
  {path: 'company-page', component: CompanyPageComponent},
  {path: 'edit-task', component: EditCourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'user-notification', component: UserNotificationComponent},
  {path: 'add-task', component: AddTasksComponent},
  {path: 'companyRegistration', component: CompanyRegistrationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
