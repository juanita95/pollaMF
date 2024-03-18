import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor() {}

  onToggleMenu(data: any) {
    let navLinks = document.getElementsByClassName('nav-links')[0];
    data.name = data.name === 'menu' ? 'close' : 'menu';
    navLinks?.classList.toggle('open-navbar');
  }
}
