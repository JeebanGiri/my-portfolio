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
  readonly radius = 54;
  readonly circumference = 2 * Math.PI * this.radius;

  skills = [
    { name: 'JavaScript', percent: '85%', color: 'blue' },
    { name: 'TypeScript', percent: '85%', color: 'blue' },
    { name: 'React JS', percent: '80%', color: 'red' },
    { name: 'NestJS', percent: '70%', color: 'crimson' },
    { name: 'Angular', percent: '75%', color: 'orange' },
    { name: 'CSS', percent: '90%', color: 'purple' },
    { name: 'Java', percent: '65%', color: 'darkblue' },
    { name: 'Node.JS', percent: '78%', color: 'forestgreen' },
    { name: 'AWS', percent: '50%', color: 'goldenrod' },
    // { name: 'Docker', percent: '60%', color: 'deepskyblue' },
    { name: 'MySQL', percent: '70%', color: 'mediumseagreen' },
    { name: 'PostgreSQL', percent: '75%', color: 'teal' },
    // { name: 'Kubernetes', percent: '45%', color: 'steelblue' },
    { name: 'Scrum / Agile', percent: '85%', color: 'darkgoldenrod' },
  ];

  getOffset(percent: string): number {
    const numericPercent = parseFloat(percent);
    return this.circumference - (numericPercent / 100) * this.circumference;
  }
}
