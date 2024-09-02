import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isFixed = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.scrollY > 130) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }

  ngOnInit(): void {
    // Initial check in case the page is loaded with a scroll position
    this.onWindowScroll();
  }
}
