import { Component } from '@angular/core';

@Component({
  selector: 'app-education-experience-timeline',
  standalone: true,
  imports: [],
  templateUrl: './education-experience-timeline.component.html',
  styleUrl: './education-experience-timeline.component.css',
})
export class EducationExperienceTimelineComponent {
  bookpath: string = '../../../assets/images/book.png';
  bookalt: string = 'Book';

  experiencePath: string = '../../../assets/images/experience.png';
  experiencealt: string = 'Experience';
}
