import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  constructor(public router: Router) {}
  blogs = [
    {
      blog_category: 'Design',
      date: 'July 28, 2024',
      title: 'Best Font for Design',
      description:
        'This blog post is especially for designer and develper to use the best fonts on their project',
      image: '../../../assets/images/blogs.jpeg',
      blogLink: 'https://blog-best-font-for-designer.vercel.app',
    },
    {
      blog_category: 'Design',
      date: 'July 23, 2024',
      title: 'Fonts for Designer and Developer',
      description:
        'This blog post is especially for designer and develper to use the best fonts on their project',
      image: '../../../assets/images/blogs.jpeg',
      blogLink: 'https://blog-best-font-designer.vercel.app',
    },
    // {

    // }
  ];

  openLink(e: Event, url: string) {
    e.preventDefault();
    window.open(url, '_blank');
  }
}
