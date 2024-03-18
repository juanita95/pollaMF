import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IMenuItem } from 'src/app/shared/interfaces/sidebar-list.interface';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent implements OnInit {

  @Input() menuItem!: IMenuItem;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {    
  }

  /**
   * get param to log out if user selected 'log out'
  */
  logOut(title: string): void {
/*     if (!title.toLocaleLowerCase().includes('log out'.toLocaleLowerCase())) return;
    this.store.dispatch(UserActions.accessToken({token: ''}));
    this.router.navigate(['/auth/login']); */
  }

}
