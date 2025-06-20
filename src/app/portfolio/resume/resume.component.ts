import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {
  bookpath: string = '../../../assets/images/book.png';
  bookalt: string = 'Book';

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

  downloadResume() {
    let link = document.createElement('a');
    link.href = '/assets/resume/Jeeban-Giri-Resume.pdf';
    link.download = 'Jeeban Giri Resume.pdf';
    link.click;
  }
}
