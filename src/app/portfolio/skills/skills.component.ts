import { CommonModule, isPlatformBrowser } from '@angular/common';

import { Component, HostListener } from '@angular/core';
import { Inject, PLATFORM_ID } from '@angular/core';

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

  // getOffset(percent: string): number {
  //   const numericPercent = parseFloat(percent);
  //   return this.circumference - (numericPercent / 100) * this.circumference;
  // }

  // Updated Code

  svgSize = 100; // default

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  // ngOnInit() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     // Only runs in the browser
  //     this.updateSvgSize(window.innerWidth);
  //   }
  // }

  // updateSvgSize(width: number) {
  //   this.svgSize = width < 580 ? 100 : 120;
  // }

  // getRadius(svgSize: number): number {
  //   const strokeWidth = 10;
  //   return svgSize / 2 - strokeWidth; // keeps circle inside SVG
  // }

  getOffset(percent: string, radius: number): number {
    const numericPercent = parseFloat(percent);
    const circumference = 2 * Math.PI * radius;
    return circumference - (numericPercent / 100) * circumference;
  }
}
