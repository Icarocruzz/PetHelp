import { Component } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuValue: boolean = false;
  menu_icon: string = 'fa-solid fa-bars'

  constructor(private viewPortScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.closeMenu();
    this.viewPortScroller.scrollToAnchor(section);
  }

  openMenu () {
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? 'fa-solid fa-x' : 'fa-solid fa-bars';
  }

  closeMenu () {
    this.menuValue = false;
    this.menu_icon = 'fa-solid fa-x';
  }

  protected readonly scroll = scroll;
}
