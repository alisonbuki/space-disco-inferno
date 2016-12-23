import { Component } from '@angular/core';
import {PlanetsService} from "./planets.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(private planets:PlanetsService){}
}
