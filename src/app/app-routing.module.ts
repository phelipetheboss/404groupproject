import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
import {ContactComponent} from "./pages/contact/contact.component";
<<<<<<< HEAD
import {ProductsComponent} from "./pages/products/products.component";


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
=======
import {LoginComponent} from "./pages/login/login.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact Us'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: '', redirectTo: 'home', pathMatch: "full"},
>>>>>>> Eduardo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
