import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { paperPlane } from 'ionicons/icons';
import { GoogleMap, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [IonIcon, GoogleMap, MapInfoWindow, MapMarker],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor() {
    addIcons({ 'paper-plane': paperPlane });
  }

  apiKey = environment.googleMapsApiKey;

  center: google.maps.LatLngLiteral = { lat: 26.6674487, lng: 87.3880129 };
  zoom = 14;
}
