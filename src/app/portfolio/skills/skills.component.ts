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
  readonly Math = Math;

  // SET COLOR AS A ROW BASIS:
  rowColors = ['red', 'orange', 'blue', 'green'];

  skills = [
    { name: 'JavaScript', percent: '80%' },
    { name: 'TypeScript', percent: '70%' },
    { name: 'React.JS', percent: '65%' },
    { name: 'Nest.JS', percent: '70%' },
    { name: 'Angular', percent: '60%' },
    { name: 'CSS', percent: '80%' },
    { name: 'Java', percent: '65%' },
    { name: 'Node.JS', percent: '78%' },
    { name: 'AWS', percent: '50%' },
    { name: 'MySQL', percent: '70%' },
    { name: 'PostgreSQL', percent: '75%' },
    { name: 'Scrum / Agile', percent: '70%' },
    // { name: 'Docker', percent: '60%', color: 'deepskyblue' },
    // { name: 'Kubernetes', percent: '45%', color: 'steelblue' },
  ];

  getOffset(percent: string): number {
    const numericPercent = parseFloat(percent);
    return this.circumference - (numericPercent / 100) * this.circumference;
  }
}
