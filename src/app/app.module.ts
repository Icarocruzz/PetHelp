import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { QualidadeComponent } from './components/qualidade/qualidade.component';
import { ServiceComponent } from './components/service/service.component';
import { ReasonsComponent } from './components/reasons/reasons.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QualidadeComponent,
    ServiceComponent,
    ReasonsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
