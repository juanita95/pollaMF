import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculesModule } from '../molecules/molecules.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    NavbarComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MoleculesModule
  ], 
  exports: [
    MoleculesModule,
    TableComponent,
    NavbarComponent
  ]
})
export class OrganismsModule { }
