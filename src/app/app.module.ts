import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { StudentsComponent } from './components/students/students.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { BalanceComponent } from './components/balance/balance.component';
import { AdminComponent } from './components/admin/admin.component';
import { NobalanceComponent } from './components/nobalance/nobalance.component';
import { SearchPipe } from './Pipes/search.pipe';
import { GenderPipe } from './Pipes/gender.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  // {
  //   path: 'students',
  //   component: StudentsComponent,
  // },
  {
    path: 'admin',
    component: AdminComponent,children:[
      {
        path: '',
        component: StudentsComponent,
      },
      {
        path: 'balance',
        component: BalanceComponent,
      },
      {
        path: 'nobalance',
        component: NobalanceComponent,
      },

    ]
  },


  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    StudentsComponent,
    AddStudentComponent,
    BalanceComponent,
    AdminComponent,
    NobalanceComponent,
    SearchPipe,
    GenderPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
