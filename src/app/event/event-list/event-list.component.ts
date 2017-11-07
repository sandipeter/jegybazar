import { Component, OnInit } from '@angular/core';
import {EventService} from '../../shared/event.service';
import {EventModel} from '../../shared/event-model';
import {UserService} from '../../shared/user.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  public eventsGrouppedBy3: EventModel[];
  public events$: Observable<EventModel[]>;
  public events: EventModel[];
  public eventsGrouppedBy3$: Observable<EventModel[][]>;

  constructor(private _eventService: EventService, private _userService: UserService) {
  }

  ngOnInit() {
    this.eventsGrouppedBy3$ = this._eventService.getAllEvents()
      .map(data => {
        return data.reduce((acc, curr: EventModel, ind: number) => {
                if (ind % 3 === 0) {
                  acc.push([]);
                }
                acc[acc.length - 1].push(curr);
                return acc;
              }, []);
      });
  }
  }
  //   this._eventService.getAllEvents().subscribe(data => {
  //     this.events = data;
  //     this.eventsGrouppedBy3 = data.reduce((acc, curr: EventModel, ind: number) => {
  //       if (ind % 3 === 0) {
  //         acc.push([]);
  //       }
  //       acc[acc.length - 1].push(curr);
  //       return acc;
  //     }, []);
  //   });
  // }



// this.events$ = this._eventService.getAllEvents();  // első megoldás







  //   // ind!! [1,2,3,4,5,6,7,8] ---reduce --> [[0,1,2][3,4,5][6,7,8]]
  //   this.eventsGrouppedBy3 = this._eventService.getAllEvents()
  //     .reduce((acc, curr: EventModel, ind: number) => {
  //       if (ind % 3 === 0){
  //         // [[eventmodel,eventmodel,eventmodel],[...]] - a külső tömbbe út tömb létrehozása
  //         acc.push([]); // belerakunk egy új tömböt
  //       }
  //       acc[acc.length - 1].push(curr);
  //       return acc;
  //     }, []);    // initial value,a végén : []
  // }


