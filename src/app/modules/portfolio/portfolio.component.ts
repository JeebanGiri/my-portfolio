import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  selectedItem: string = '';

  selectItem(item: string) {
    this.selectedItem = item;
  }
}
