import { Component, OnInit } from '@angular/core';
import {TicketModel} from '../../shared/ticket-model';
import {UserService} from '../../shared/user.service';
import {EventModel} from '../../shared/event-model';
import {EventService} from '../../shared/event.service';
import {Router} from '@angular/router';
import {TicketService} from '../../shared/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: TicketModel;
  events: EventModel[];
  constructor(private _userService: UserService,
              private _eventService: EventService,
              private _router: Router,
              private _ticketService: TicketService) { }

  ngOnInit() {
    this.ticket = new TicketModel(TicketModel.emptyTicket);
    this.ticket.sellerUserId = this._userService.getCurrentUser().id;
    this.events = this._eventService.getAllEvents();
  }

  onSubmit() {
    console.log(this.ticket);
    this._ticketService.create(this.ticket);
    this._router.navigate(['/ticket']);
  }
}
