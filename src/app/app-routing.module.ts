import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { LoginComponent } from "./pages/login/login.component";
import { CreateSurveyComponent } from "./pages/create-survey/create-survey.component";
import { ListSurveyComponent } from "./pages/survey/list-survey/list-survey.component";
import { UpdateSurveyComponent } from './pages/update-survey/update-survey.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'create-survey', component: CreateSurveyComponent, data: {title: 'Create Surveys'}},
  {path: 'survey-list', component: ListSurveyComponent, data: {title: 'Surveys'}},
  {path: 'update-survey/:id', component: UpdateSurveyComponent, data: {title: 'Surveys'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
