import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddmonsterComponent } from '../addmonster/addmonster.component';
import { HomeComponent } from '../home/home.component';
import { HomeModule } from './home.module';
import { MonsterdetailComponent } from '../monsterdetail/monsterdetail.component';

const routes: Routes = [
  {path: 'add', component: AddmonsterComponent}, 
  {path: 'home', loadChildren: () => import('./home.module').then(x => x.HomeModule)},
  {path: 'detail/:id', loadChildren: () => import('./monsterdetail.module').then(x => x.MonsterdetailModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
