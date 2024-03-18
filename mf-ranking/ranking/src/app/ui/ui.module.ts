import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
    RankingComponent,
    ComponentsModule
  ]
})
export class UiModule { }
