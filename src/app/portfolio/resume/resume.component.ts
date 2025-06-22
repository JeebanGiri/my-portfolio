import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import { addIcons } from 'ionicons';
import { BrowserService } from '../../shared/browser.service';
import { Router } from '@angular/router';
// import { globeOutline, locationOutline } from 'ionicons/icons';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  constructor(public browserService: BrowserService, private router: Router) {
    // addIcons({
    //   'location-outline': locationOutline,
    //   'globe-outline': globeOutline,
    // });
  }

  bookpath: string = '../../../assets/images/book.png';
  bookalt: string = 'Book';

  profilepath: string = '../../../assets/images/profile.jpeg';
  profilealt: string = 'Profile';

  timelineData = [
    {
      title: 'Backend Developer at Virtuosway',
      date: 'Apr 2021 – Present',
      description: 'Developing and maintaining backend services and APIs.',
    },
    {
      title: 'Graduated from Tribhuvan University',
      date: '2020',
      description: 'Completed BSc in Computer Science.',
    },
    // Add more items...
  ];

  goToResume() {
    this.router.navigate(['contact']);
  }
  goToPortfolio() {
    this.router.navigate(['portfolio']);
  }

  downloadResume() {
    let link = document.createElement('a');
    link.href = 'assets/resume/Jeeban-Giri-Resume.pdf';
    link.download = 'Jeeban Giri Resume.pdf';
    link.click();
  }
}
