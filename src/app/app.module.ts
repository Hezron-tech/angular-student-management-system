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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { CustomStyleDirective } from './Directives/custom-style.directive';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent ,children:[
      {
        path: 'login',
        component: LoginComponent,
      },
    ]
  },

  
  {
    path: 'admin', canActivate:[AuthGuard],
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

      {
        path: 'add-student',
        component: AddStudentComponent,
      },

    ]
  },


  {
    path: 'login',
    component: LoginComponent,
  },


  { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
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
    NotFoundComponent,
    CustomStyleDirective,
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
