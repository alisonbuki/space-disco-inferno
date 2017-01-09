import {AppComponent} from './app.component';
import {KodaRunComponent} from './koda-run/koda-run.component';
import {SpaceDiscoComponent} from './space-disco/space-disco.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path:'', component: AppComponent},
  {path:'koda-run', component: KodaRunComponent},
  {path:'space-disco', component: SpaceDiscoComponent}
];

export default RouterModule.forRoot(routes);
