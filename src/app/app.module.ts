import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolverService
} from './events/index';
import {AppComponent} from './app.component';
import {NavbarComponent} from './events/navbar/navbar.component';
import {ToastrService} from './common/toastr.service';
import {appRoutes} from './routes';
import {Error404Component} from './errors/error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    ToastrService,
    EventListResolverService,
    { provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
