import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.css'
})
export class RoomsListComponent implements OnInit {


  @Input()rooms:RoomList[]=[];

  @Output() SelectedRoom = new EventEmitter<RoomList>();
ngOnInit(): void {
  
}
selectRoom(room:RoomList){
  this.SelectedRoom.emit(room);
}



}
