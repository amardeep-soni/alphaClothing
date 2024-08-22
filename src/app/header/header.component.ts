import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
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
