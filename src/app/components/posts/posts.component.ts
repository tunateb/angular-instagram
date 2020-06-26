import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts = [
    {
      id: 1,
      src:
        'https://images.unsplash.com/photo-1593003126851-da06b739fc6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      src:
        'https://images.unsplash.com/photo-1593024311702-c818cddcbb42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    },
    {
      id: 3,
      src:
        'https://images.unsplash.com/photo-1593079969175-75a373e0a959?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
    },
    {
      id: 4,
      src:
        'https://images.unsplash.com/photo-1593013162948-bb250f504bd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 5,
      src:
        'https://images.unsplash.com/photo-1593024176361-4d77e7a71724?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 6,
      src:
        'https://images.unsplash.com/photo-1593033594653-04bb7a5760ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 7,
      src:
        'https://images.unsplash.com/photo-1593024182949-15d80d7ecb39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 8,
      src:
        'https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 9,
      src:
        'https://images.unsplash.com/photo-1592831741689-c56d59e3d31e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 10,
      src:
        'https://images.unsplash.com/photo-1592887714077-1c2ca9cdcf48?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 11,
      src:
        'https://images.unsplash.com/photo-1592918759777-9ed677d1ef7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 12,
      src:
        'https://images.unsplash.com/photo-1592846874808-0556dee6de29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
