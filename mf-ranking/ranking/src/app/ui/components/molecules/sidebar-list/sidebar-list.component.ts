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
      router: '/polla/ranking',
      title: 'Ranking'
    },
    {
      router: '/polla/personal',
      title: 'Perfil'
    },
    {
      router: '/polla/match',
      title: 'Partido'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
