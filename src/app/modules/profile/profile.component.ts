import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  profilepath: string = '../../../assets/images/jeeban.jpg';
  profilealt: string = 'Profile';
}
