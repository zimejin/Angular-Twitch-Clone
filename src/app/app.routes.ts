import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ChannelComponent } from './channel-component';
import { NoContentComponent } from './no-content';
import { MainComponent } from './main/main.component';

import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  { path: '',      component: MainComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'browse', component: MainComponent },
  { path: '**',    component: NoContentComponent },
];
