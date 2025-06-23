import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { eyeOutline } from 'ionicons/icons';
import { BrowserService } from '../../shared/browser.service';
import { link } from 'fs';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, IonIcon],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PortfolioComponent {
  constructor(public browserService: BrowserService) {
    addIcons({ 'eye-outline': eyeOutline });
  }
  selectedItem: string | null = 'all';

  selectItem(item: string) {
    this.selectedItem = item;
  }

  allProject = [
    {
      title: 'Horizon Residence',
      description: 'Web Development',
      image: '../../../assets/images/project/all/fyp.png',
      link: 'https://fyp-frontend-mu.vercel.app/',
    },
    {
      title: 'E-Book Store',
      description: 'Web Design',
      image: '../../../assets/images/project/all/ecommerce.png',
      link: '',
    },
    {
      title: 'E-Book Store',
      description: 'Web Design',
      image: '../../../assets/images/project/all/ecommerce.png',
      link: '',
    },
  ];

  webDesign = [
    {
      title: 'Project 1',
      description: 'Description 1',
      image: '../../../assets/images/project/web-design/ecommerce.png',
      link: '',
    },
    {
      title: 'Project 2',
      description: 'Description 2',
      image: '../../../assets/images/project/web-design/fyp.png',
      link: '',
    },
  ];

  applications = [
    {
      title: 'Horizon Residence',
      description: 'Web Development',
      image: '../../../assets/images/project/all/fyp.png',
      link: '',
    },
  ];

  webDevelopment = [
    {
      title: 'Horizon Residence',
      description: 'Web Development',
      image: '../../../assets/images/project/all/fyp.png',
      link: '',
    },
  ];

  getActiveProjects() {
    switch (this.selectedItem) {
      case 'web-design':
        return this.webDesign;
      case 'application':
        return this.applications;
      case 'web-development':
        return this.webDevelopment;
      case 'all':
      default:
        return this.allProject;
    }
  }
  openProject(e: Event, url: string) {
    e.preventDefault();
    window.open(url, '_blank');
  }
}
