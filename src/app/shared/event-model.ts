export class EventModel {
  id?: string;
  name: string;
  date: string; // így egyszerűbb...
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
      'name': '',
      'date': '',
      'pictureURL': '',
      'description': ''
    };
  }
}
