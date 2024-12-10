import { Component } from '@angular/core';

@Component({
  selector: 'app-roles',
  imports: [],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Angular tutorial";
  angularVersion = "Version 19";

  version: number = 19;

  isactive : boolean = false;

  currentDate : Date = new Date();

}
