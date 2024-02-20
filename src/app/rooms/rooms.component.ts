import { AfterViewInit, Component, OnInit, SkipSelf, ViewChild } from '@angular/core';
import { RoomsService } from './rooms.service';
import { Room, RoomList } from './rooms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent implements OnInit,AfterViewInit {


  hotelname="suriyahotel";
  NumberOfRooms =10;
  hiderooms=false;

  SelectedRoom !:RoomList;
   rooms:Room ={
  availableRooms :10 ,
  BookedRooms:5,
  totalRooms:15
};
roomlist: RoomList[] =[];

//roomservice = new roomservice;
constructor( @SkipSelf() private roomService:RoomsService)
{ 
    this.roomlist = this.roomService.getRooms();
}

Toggle()
{this.hiderooms=!this.hiderooms}

ngOnInit(): void {
  //console.log(this.headerComponent);
  
}
ngAfterViewInit(): void {
  this.headerComponent.title = "he ram";
  
}


selectRoom(room:RoomList){
  this.SelectedRoom= room;
}


@ViewChild(HeaderComponent) headerComponent!:HeaderComponent;
}



