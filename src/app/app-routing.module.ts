import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';

// TODO: realizar authGuard y su lógica con JWT
const routes: Routes = [
  {
    path: 'home',component: HomeComponent 
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full', 
  },
  {
    path: 'login', component: LoginComponent 
  },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      {
        path: 'educacion', component: EducationComponent
      },
      {
        path: 'habilidades', component: SkillsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
