import { Component, OnInit } from '@angular/core';
import { IMenuItem } from 'src/app/shared/interfaces/sidebar-list.interface';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.scss']
})
export class SidebarListComponent implements OnInit {

  menuItems: IMenuItem[] = 
  [
    {
      router: '/ranking',
      title: 'Ranking'
    },
    {
      router: '/personal',
      title: 'Perfil'
    },
    {
      router: '/match',
      title: 'Partido'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
