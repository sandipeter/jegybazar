import { Injectable } from '@angular/core';
import {EventModel} from './event-model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {UserModel} from './user-model';

@Injectable()
export class EventService {
  // private _events: EventModel[];
  // private _events: Array<EventModel>;  - ugyanaz mint a felső!!

  constructor(private _http: HttpClient) {
}
  getAllEvents(): Observable<EventModel[]> {    // visszatérési érték
    return this._http.get(`${environment.firebase.baseUrl}/events.json`)
      .map(data => Object.values(data).map(evm => new EventModel(evm)));
  }

  getEventById(id: number) {
    return this._http.get<EventModel>(`${environment.firebase.baseUrl}/events/${id}.json`);
    // const ev = this._events.filter(x => x.id === +id);
    // return ev.length > 0 ? ev[0] : new EventModel(EventModel.emptyEvent);
  }

  update(param: EventModel) {
    // this._events = this._events.map(ev => ev.id === param.id ? {...param} : ev);
  }

  create(param: EventModel) {
    //   this._events = [
    //     ...this._events,
    //     {
    //       id: this._getMaxId() + 1,
    //       ...param
    //     }
    //   ];
    // console.log(this._events);
  }
}

