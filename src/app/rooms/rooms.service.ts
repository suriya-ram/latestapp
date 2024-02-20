import { Injectable } from '@angular/core';
import { RoomList } from './rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor( private http :HttpClient) { }



  roomlist:RoomList[]=[]
    

  getRooms()
  {
   return  this.roomlist;
  }
}
