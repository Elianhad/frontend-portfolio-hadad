import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { LoginComponent } from './components/pages/login/login.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ContactComponent } from './components/contact/contact.component';
import { ButtonplusComponent } from './components/buttonplus/buttonplus.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ButtonbackComponent } from './components/buttonback/buttonback.component';
import { FormEducationComponent } from './components/form-education/form-education.component';
import { FormSkillsComponent } from './components/form-skills/form-skills.component';
import { Page404Component } from './components/page404/page404.component';
import { ButtonEditComponent } from './components/button-edit/button-edit.component';
import { ButtonDeleteComponent } from './components/button-delete/button-delete.component';
import { ToastComponent } from './components/toast/toast.component';
import { InterceptorRequestService } from './service/interceptor-request.service';
import { SocialmediaComponent } from './components/socialmedia/socialmedia.component';
import { FormProjectsComponent } from './components/form-projects/form-projects.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ExperienceComponent } from './components/experience/experience.component';


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
    ContactComponent,
    ButtonplusComponent,
    FormLoginComponent,
    ButtonbackComponent,
    FormEducationComponent,
    FormSkillsComponent,
    Page404Component,
    ButtonEditComponent,
    ButtonDeleteComponent,
    ToastComponent,
    SocialmediaComponent,
    FormProjectsComponent,
    ProjectListComponent,
    ExperienceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorRequestService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
