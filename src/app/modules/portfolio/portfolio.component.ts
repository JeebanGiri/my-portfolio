import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  selectedItem: string | null = null;

  selectItem(item: string) {
    this.selectedItem = item;
  }

  aiProject = [
    {
      title: 'Project 1',
      description: 'Description 1',
      image: '../../../assets/images/project/ai/project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      image: '../../../assets/images/project/ai/project1.jpg',
    },
    // Add more projects as needed
  ];
}
