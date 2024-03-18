import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { AtomsModule } from '../atoms/atoms.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    SidebarListComponent,
    SidebarItemComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    AtomsModule,
    SidebarListComponent,
    SidebarItemComponent,
  ]
})
export class MoleculesModule { }
