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
import { BasePageComponent } from './partials/base-page/base-page.component';
import { LoginComponent } from './pages/login/login.component';
import { ListSurveyComponent } from './pages/list-survey/list-survey.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';
import { UpdateSurveyComponent } from './pages/update-survey/update-survey.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    AboutComponent,
    BasePageComponent,
    LoginComponent,
    ListSurveyComponent,
    CreateSurveyComponent,
    UpdateSurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
