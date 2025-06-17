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
  clrList = ['red', 'yellow', 'green', 'blue'];

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

  // getBorderWidth(percent: string): string {
  //   const numericPercent = parseFloat(percent);
  //   // Scale 0–100% into 1px–20px border
  //   const width = Math.max(1, Math.min(10, (numericPercent / 100) * 10));
  //   return `${width}px`;
  // }

  // getBorderColor(percent: string): string {
  //   const numericPercent = parseFloat(percent);
  //   if (numericPercent >= 80) return 'limegreen';
  //   if (numericPercent >= 60) return 'orange';
  //   return '#FFB400';
  //   // return 'crimson';
  // }

  getOffset(percent: string): number {
    const numericPercent = parseFloat(percent);

    return this.circumference - (numericPercent / 100) * this.circumference;
  }
}
