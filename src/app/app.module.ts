import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';
<<<<<<< HEAD

=======
import { AboutComponent } from './pages/about/about.component';
import { BasePageComponent } from './partials/base-page/base-page.component';
import { LoginComponent } from './pages/login/login.component';
>>>>>>> Eduardo

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
<<<<<<< HEAD
    ProductsComponent
=======
    ProductsComponent,
    AboutComponent,
    BasePageComponent,
    LoginComponent
>>>>>>> Eduardo
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
