import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  clrList = ['red', 'yellow', 'green', 'blue'];

  skills = [
    { name: 'React JS', percent: 80, color: 'red' },
    { name: 'Angular', percent: 75, color: 'yellow' },
    { name: 'TypeScript', percent: 85, color: 'green' },
    { name: 'CSS', percent: 90, color: 'blue' },
  ];
}
