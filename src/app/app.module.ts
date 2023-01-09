import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './Module/app-routing.module';
import { AppComponent } from './app.component';
import { MonstercardComponent } from './monstercard/monstercard.component';
import { HttpClientModule } from '@angular/common/http';
import { MonsterdetailComponent } from './monsterdetail/monsterdetail.component';
import { AddmonsterComponent } from './addmonster/addmonster.component';
import { LoweremailPipe } from './Filters/loweremail.pipe';
import { HomeModule } from './Module/home.module';
import { MonsterdetailModule } from './Module/monsterdetail.module';

@NgModule({
  declarations: [
    AppComponent,  
    AddmonsterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // HomeModule,
    // MonsterdetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('App Module Loaded')
  }
 }
