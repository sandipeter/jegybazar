import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EventService} from '../../shared/event.service';
import {EventModel} from '../../shared/event-model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: EventModel;

  constructor(private _route: ActivatedRoute, private _eventService: EventService, private _router: Router, private _location: Location) { }

  ngOnInit() {
    const evId = +this._route.snapshot.params['new'];   // ez egyenlő : this._route.snapshot.params?.id
    this.event = this._eventService.getEventById(evId);

  }

  onSubmit(form) {
    if (this.event.id) {
      this._eventService.update(this.event);     // two way binding van most, de normálisan : this.event.id, form - két paraméte rkelelne
    }else {
      this._eventService.create(this.event);
    }
    this._location.back();
  }
}
