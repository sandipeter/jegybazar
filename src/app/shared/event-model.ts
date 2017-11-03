export class EventModel {
  id: number;
  name: string;
  date: string // így egyszerűbb...
  pictureURL: string;
  description: string;

  // new EventModel() vagy new EventModel(....) is jó -? miatt
  constructor(param?: EventModel) {
    if (param) {
      Object.assign(this, param);
    }
  }
  static get emptyEvent() {
    return {
      'id': 0,
      'name': '',
      'date': '',
      'pictureURL': '',
      'description': ''
    };
  }
}
