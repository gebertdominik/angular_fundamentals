import {Routes} from '@angular/router';
import {Error404Component} from './errors/error404/error404.component';

import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivatorService,
  EventListResolverService
} from './events/index';

export const appRoutes: Routes = [
  // should be before events/:id to match it first
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivatorService]},
  {path: 'error404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: './user/user.module#UserModule'}
];
