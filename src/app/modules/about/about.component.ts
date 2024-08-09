import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  webpath: string = '../../../assets/images/web-design.png';
  webalt: string = 'Web Design';
  devpath: string = '../../../assets/images/web-develop.png';
  devalt: string = 'Web Development';
  apppath: string = '../../../assets/images/phone.png';
  appalt: string = 'Mobile App';
  camerapath: string = '../../../assets/images/camera.png';
  cameraalt: string = 'Camera';
}
