import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  blogs = [
    {
      blog_category: 'Design',
      date: 'July 23, 2024',
      title: ' Design conferences in 2022',
      description:
        'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      image: '../../../assets/images/blogs.jpeg',
    },
    {
      blog_category: 'Design',
      date: 'July 28, 2024',
      title: 'Best Font for Design',
      description:
        'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      image: '../../../assets/images/blogs.jpeg',
    },
  ];
}
