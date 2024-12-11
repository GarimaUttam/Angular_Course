import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RolesComponent } from './myComponents/roles/roles.component';
import { MasterComponent } from './myComponents/master/master.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RolesComponent,MasterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_19_course';
}
