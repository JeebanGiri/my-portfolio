import { Routes } from '@angular/router';
import { AboutComponent } from '../../modules/about/about.component';
import { ResumeComponent } from '../../modules/resume/resume.component';
import { PortfolioComponent } from '../../modules/portfolio/portfolio.component';
import { BlogComponent } from '../../modules/blog/blog.component';
import { ContactComponent } from '../../modules/contact/contact.component';

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
