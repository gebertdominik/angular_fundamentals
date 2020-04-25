import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {EventService} from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {


  constructor(private eventService: EventService,
              private router: Router ) {

  }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const eventExists = !!this.eventService.getEvent(+route.paramMap.get('id'));

    if (!eventExists) {
      this.router.navigate(['/error404']);
    }
    return eventExists;

  }
}
