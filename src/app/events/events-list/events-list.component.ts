import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  event1 = {
    id: 1,
    name: 'Angular connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };

  handleEventClicked(data) { // we can handle only one parameter, but it could be an object
    console.log('received:', data);
  }

  constructor() { }

  ngOnInit() {
  }

}
