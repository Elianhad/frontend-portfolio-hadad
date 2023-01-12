import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ButtonplusComponent } from './components/buttonplus/buttonplus.component';
import { FormDashboardComponent } from './components/form-dashboard/form-dashboard.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ButtonbackComponent } from './components/buttonback/buttonback.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    EducationComponent,
    SkillsComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ButtonsComponent,
    ProjectsComponent,
    ContactComponent,
    ButtonplusComponent,
    FormDashboardComponent,
    FormLoginComponent,
    ButtonbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
