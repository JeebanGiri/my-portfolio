import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './standalone-components/navbar/navbar.component';
import { AboutComponent } from './portfolio/about/about.component';
import { BlogComponent } from './portfolio/blog/blog.component';
import { ProfileComponent } from './portfolio/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Jeeban.Giri';
}
