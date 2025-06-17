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

  getSkillStyle(skill: { percent: string }) {
    const percent = parseInt(skill.percent);
    if (isNaN(percent)) return {};

    return {
      background: `conic-gradient(#ffc107 ${percent * 3.6}deg, #1e1e1e 0deg)`,
    };
  }
}
