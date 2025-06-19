import { Component } from '@angular/core';
// import { IonIcon } from '@ionic/angular/standalone';
// import { addIcons } from 'ionicons';
import { chevronDown } from 'ionicons/icons';
import { BrowserService } from '../../shared/browser.service';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor() {
    // addIcons({ 'chevron-down': chevronDown });
  }
  // profilepath: string = '../../../assets/images/my-avatar.png';
  profilepath: string = '../../../assets/images/profile.jpeg';
  profilealt: string = 'Profile';

  isExpanded: boolean = false;

  toggleInfo() {
    this.isExpanded = !this.isExpanded;
  }
}
