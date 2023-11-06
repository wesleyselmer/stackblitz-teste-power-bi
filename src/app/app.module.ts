import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CheckboxModule } from 'primeng/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, NavbarComponent, FooterComponent],
  imports: [BrowserModule, 
    BrowserAnimationsModule, 
    AppRoutingModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
