import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../../shared/event.service';
import {EventModel} from '../../shared/event-model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: EventModel;

  constructor(private _route: ActivatedRoute, private _eventService: EventService) { }

  ngOnInit() {
    const evId = +this._route.snapshot.params['new'];   // ez egyenlő : this._route.snapshot.params?.id
    this.event = this._eventService.getEventById(evId);
    console.log(this.event);
  }

}
