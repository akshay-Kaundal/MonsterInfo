import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, Subscription } from 'rxjs';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  monsterDetails: any; 
  filterWithDebounce: string;
  filterBy: string;
  filterSub: Subject<string> = new Subject();
  
  constructor(private dataService: DataService){
  }

  ngOnInit(): void {
    this.monsterDetails = this.dataService.getData('users');
    this.filterSub.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(inputVal => {
      this.filterWithDebounce = inputVal;
    })
    // this.subs.add(this.dataService.getData('users').subscribe(users => {
    //   this.monsterDetails = users;
    // })
    // )    
  }

  filterByDebounce(): void{
    this.filterSub.next(this.filterBy);
  }
}
