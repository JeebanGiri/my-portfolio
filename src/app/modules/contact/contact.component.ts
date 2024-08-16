import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { paperPlane } from 'ionicons/icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IonIcon],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor() {
    addIcons({ 'paper-plane': paperPlane });
  }
}
