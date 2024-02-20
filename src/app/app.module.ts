import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { HeaderComponent } from './header/header.component';
//import { EmployeesComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomsListComponent } from './rooms/rooms-list/rooms-list.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    ContainerComponent,
    HeaderComponent,
   
    RoomsListComponent,
    EmployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppComponent,
    ContainerComponent
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
