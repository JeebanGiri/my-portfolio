import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { documentOutline } from 'ionicons/icons';
import { BrowserService } from '../../shared/browser.service';
import { IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education-experience-timeline',
  standalone: true,
  imports: [IonIcon, CommonModule],
  templateUrl: './education-experience-timeline.component.html',
  styleUrl: './education-experience-timeline.component.css',
})
export class EducationExperienceTimelineComponent {
  constructor(public browserService: BrowserService, private router: Router) {
    addIcons({ 'document-outline': documentOutline });
  }
  bookpath: string = '../../../assets/images/book.png';
  bookalt: string = 'Book';

  experiencePath: string = '../../../assets/images/experience.png';
  experiencealt: string = 'Experience';

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
