import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { paperPlane } from 'ionicons/icons';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { environment } from '../../../environments/environment';
import { BrowserService } from '../../shared/browser.service';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { service_ID } from '../../../environments/environment';
import { template_ID } from '../../../environments/environment';
import { public_KEY } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    IonIcon,
    // GoogleMap,
    // MapInfoWindow,
    // MapMarker,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(public browserService: BrowserService) {
    addIcons({ 'paper-plane': paperPlane });
  }

  apiKey = environment.googleMapsApiKey;

  center: google.maps.LatLngLiteral = { lat: 26.6674487, lng: 87.3880129 };
  zoom = 14;

  form = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    const formParams = {
      name: this.form.name,
      email: this.form.email,
      message: this.form.message,
    };

    emailjs.send(service_ID, template_ID, formParams, public_KEY).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message Sent Successfully');
        this.form = { name: '', email: '', message: '' };
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Something went wrong. Please try again.');
      }
    );
  }
}
