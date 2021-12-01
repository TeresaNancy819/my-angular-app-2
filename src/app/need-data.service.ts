import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NeedDataService {

  constructor() { }
  products=[{
    Gname:'Football'
  },{
   Gname: 'Gloves'
  },
  {
    Gname:'Glof'
  }]
}
