import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';
import { EducationExperienceTimelineComponent } from '../education-experience-timeline/education-experience-timeline.component';
import { BrowserService } from '../../shared/browser.service';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { documentOutline, eyeOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    EducationExperienceTimelineComponent,
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(public browserService: BrowserService, private router: Router) {
    addIcons({
      'document-outline': documentOutline,
    });
  }
  webpath: string = '../../../assets/images/web-design.png';
  webalt: string = 'Web Design';
  devpath: string = '../../../assets/images/web-develop.png';
  devalt: string = 'Web Development';
  apppath: string = '../../../assets/images/phone.png';
  appalt: string = 'Mobile App';
  camerapath: string = '../../../assets/images/camera.png';
  cameraalt: string = 'Camera';

  completedActions = [
    { title: '3', description: 'year of experience' },
    { title: '10', description: 'completed projects' },
    { title: '5', description: 'awards won' },
  ];
}
