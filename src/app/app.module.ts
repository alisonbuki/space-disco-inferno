import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import appRoutes from './app.routes';
import {RouterModule, Router} from '@angular/router';



import { AppComponent } from './app.component';
import { SpaceDiscoComponent } from './space-disco/space-disco.component';
import {PlanetsService} from "./planets.service";
import { KodaRunComponent } from './koda-run/koda-run.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    SpaceDiscoComponent,
    KodaRunComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    appRoutes
  ],
  providers: [PlanetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
