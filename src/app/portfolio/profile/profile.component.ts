import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { documentOutline, eyeOutline } from 'ionicons/icons';
import { BrowserService } from '../../shared/browser.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  constructor(public browserService: BrowserService, private router: Router) {
    addIcons({
      'document-outline': documentOutline,
      'eye-outline': eyeOutline,
    });
  }
  profilepath: string = '../../../assets/images/profile.jpeg';
  profilealt: string = 'Profile';

  isExpanded: boolean = false;

  toggleInfo() {
    this.isExpanded = !this.isExpanded;
  }

  goToResume() {
    this.router.navigate(['/resume']);
  }

  downloadResume() {
    let link = document.createElement('a');
    link.href = 'assets/resume/Jeeban-Giri-Resume.pdf';
    link.download = 'Jeeban Giri Resume.pdf';
    link.click();
  }
}
