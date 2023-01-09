import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../Filters/filter.pipe';
import { HomeComponent } from '../home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MonstercardComponent } from '../monstercard/monstercard.component';
import { LoweremailPipe } from '../Filters/loweremail.pipe';

const homeRoute : Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe,
    MonstercardComponent,    
    LoweremailPipe,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    [RouterModule.forChild(homeRoute)],
  ],
  exports: [RouterModule]
})
export class HomeModule {
  constructor(){
    console.log('Home module loaded');
  }
 }
