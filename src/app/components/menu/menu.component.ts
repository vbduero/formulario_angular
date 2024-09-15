import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import path from 'path';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menu = [
    { name: 'Home', path: '/home'},
    { name: 'Contact', path: '/contact'},
    { name: 'About', path: '/about'},
    { name: 'Publicaciones', path: '/posts' },
    { name: 'Form', path: '/form'},
  ];

}
