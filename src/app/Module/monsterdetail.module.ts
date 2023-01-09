import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonsterdetailComponent } from '../monsterdetail/monsterdetail.component';
import { Router, RouterModule, Routes } from '@angular/router';

const monsterDetailRoute : Routes = [
  {path: '', component: MonsterdetailComponent},
]

@NgModule({
  declarations: [     
    MonsterdetailComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(monsterDetailRoute)
  ],
  exports: [RouterModule]
})
export class MonsterdetailModule {
  constructor(){
    console.log('MosterDetail module loaded')
  }
 }
