import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent implements AfterContentInit {


  @ContentChild(EmployeeComponent) employee !: EmployeeComponent;


ngAfterContentInit(): void {
  this.employee.empName ="Rajesh";

}
}