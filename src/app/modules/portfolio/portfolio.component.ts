import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { eyeOutline } from 'ionicons/icons';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  constructor() {
    addIcons({ 'eye-outline': eyeOutline });
  }
  selectedItem: string | null = 'all';

  selectItem(item: string) {
    this.selectedItem = item;
  }

  aiProject = [
    {
      title: 'Project 1',
      description: 'Description 1',
      image: '../../../assets/images/project/all/project1.jpg',
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      image: '../../../assets/images/project/all/project1.jpg',
    },
  ];
}
