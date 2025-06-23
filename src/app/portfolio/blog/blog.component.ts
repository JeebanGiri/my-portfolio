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
        'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      image: '../../../assets/images/blogs.jpeg',
      blogLink: 'https://blog-best-font-for-designer.vercel.app',
    },
    {
      blog_category: 'Design',
      date: 'July 23, 2024',
      title: ' Design conferences in 2022',
      description:
        'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      image: '../../../assets/images/blogs.jpeg',
      blogLink: '',
    },
  ];

  openLink(e: Event, url: string) {
    e.preventDefault();
    window.open(url, '_blank');
  }
}
