import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../shared/event.service';
import {EventModel} from '../../shared/event-model';
import { Location } from '@angular/common';
import {UserService} from '../../shared/user.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: EventModel;
  editForm = false;

  constructor(private _route: ActivatedRoute,
              private _eventService: EventService,
              public userService: UserService,
              private _location: Location) { }

  ngOnInit() {
    const evId = +this._route.snapshot.params['new'];   // ez egyenlő : this._route.snapshot.params?.id
    if (evId) {
      this.event = this._eventService.getEventById(evId);
    } else {
      this.event = new EventModel(EventModel.emptyEvent);
      this.editForm = true;
    }
  }

  onSubmit(form) {
    if (this.event.id) {
      this._eventService.update(this.event);     // two way binding van most, de normálisan : this.event.id, form - két paraméte rkelelne
    }else {
      this._eventService.create(this.event);
    }
    this._location.back();
  }



  navigateBack() {
    this._location.back();
  }
}
