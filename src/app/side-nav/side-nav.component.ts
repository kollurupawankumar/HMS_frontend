import { Component } from '@angular/core';
import { faCoffee, faBed, faHospitalUser, faCalendar, faMedkit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  faCoffee = faCoffee;
  faBed = faBed
  faHospitalUser = faHospitalUser
  faCalendar = faCalendar
  faMedkit = faMedkit
}
