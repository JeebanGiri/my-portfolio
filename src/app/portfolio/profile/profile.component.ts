import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronDownOutline, documentOutline, eyeOutline } from 'ionicons/icons';
import { BrowserService } from '../../shared/browser.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent implements OnInit {
  isMobile = false;
  isExpanded: boolean = false;

  profilepath: string = '../../../assets/images/profile.jpeg';
  profilealt: string = 'Profile';

  constructor(
    public browserService: BrowserService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    addIcons({
      'document-outline': documentOutline,
      'eye-outline': eyeOutline,
      'chevron-down-outline': chevronDownOutline
    });
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateScreenSize();
      window.addEventListener('resize', () => this.updateScreenSize());
    }
  }

  updateScreenSize() {
    this.isMobile = window.innerWidth <= 767;
  }

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
