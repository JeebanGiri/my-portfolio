import { Routes } from '@angular/router';
import { AboutComponent } from '../../portfolio/about/about.component';
import { ResumeComponent } from '../../portfolio/resume/resume.component';
import { PortfolioComponent } from '../../portfolio/portfolio/portfolio.component';
import { BlogComponent } from '../../portfolio/blog/blog.component';
import { ContactComponent } from '../../portfolio/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  {
    path: 'resume',
    component: ResumeComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];
