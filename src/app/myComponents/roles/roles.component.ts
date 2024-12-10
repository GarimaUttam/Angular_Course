import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {
  firstName: string = "Angular tutorial";
  angularVersion = "Version 19";
  version: number = 19;
  isactive : boolean = false;
  currentDate : Date = new Date();
  inputType: string = "button";
  selectedState: string ="";

  // event binding
  showWelcomeAlert() {
    alert("Welcome Angular")
  }
  showMessage(message: string) {
    alert(message)
  }
}
