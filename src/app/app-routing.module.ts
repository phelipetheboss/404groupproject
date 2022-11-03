import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";
<<<<<<< HEAD
import {ContactComponent} from "./pages/contact/contact.component";
import {ProductsComponent} from "./pages/products/products.component";
=======
import {ProductsComponent} from "./pages/products/products.component";
import {ContactComponent} from "./pages/contact/contact.component";
>>>>>>> Eduardo

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
<<<<<<< HEAD
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
=======
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: 'home', pathMatch: "full"},
>>>>>>> Eduardo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
