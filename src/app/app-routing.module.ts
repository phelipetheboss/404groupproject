import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {ProductsComponent} from "./pages/products/products.component";
import {LoginComponent} from "./pages/login/login.component";
import {CreateSurveyComponent} from "./pages/create-survey/create-survey.component";
import {ListSurveyComponent} from "./pages/list-survey/list-survey.component";
import { UpdateSurveyComponent } from './pages/update-survey/update-survey.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact Us'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'create-survey', component: CreateSurveyComponent},
  {path: 'list-survey', component: ListSurveyComponent},
  {path: 'update-survey/:id', component: UpdateSurveyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
