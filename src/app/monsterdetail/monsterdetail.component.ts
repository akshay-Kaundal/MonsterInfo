import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Monsterdetail } from '../Model/monsterdetail';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-monsterdetail',
  templateUrl: './monsterdetail.component.html',
  styleUrls: ['./monsterdetail.component.css']
})
export class MonsterdetailComponent implements OnInit {
  monsterInfo: Monsterdetail ;
  id: number = 0;
  idStr: string;
  // = {
  //   email: 'abc@emal',
  //   id: 1,
  //   name: 'dummy name',
  //   username: 'dummy username',
  // };
  allMonsterInfo: Monsterdetail[];
  check: any;
  
  constructor(private dataService: DataService,
    private route: ActivatedRoute)
  {
    // console.log('this si contructor')

    // this.monsterInfo = {
    //   email: 'abc@emal',
    //   id: 1,
    //   name: 'dummy name',
    //   username: 'dummy username',
    // }
    // console.log('Moster data 1',this.allMonsterInfo)
  }

  ngOnInit(): void {
    // this.route.queryParams.subscribe(param => {
    //   this.id = parseInt(param['id']!, 5)
    // })
    // this.route.paramMap.pipe(
    //   switchMap((param: ParamMap)=> 
    //    this.idStr = param.get('id')!)
    // );
    this.route.paramMap.subscribe(res => 
      // console.log(res)
      this.idStr = res.get('id') || ''
      );
    // console.log('this is Id',this.idStr);
    this.id = parseInt(this.idStr); 
    this.dataService.getData('users').subscribe((monsters: Monsterdetail[]) =>{
      // console.log(monsters)
      this.monsterInfo = monsters.find(x => x.id === this.id) || this.getMonsterData()
      // console.log('final monster', this.monsterInfo)
      // || {
      //       email: 'abc@emal',
      //       id: 1,
      //       name: 'dummy name inside obs',
      //       username: 'dummy username inside obs',
      // };      
    } );

    // this.getMonsterData();
  }

  // getMonsterDataInJson() : Observable<Monsterdetail[]>{
  //   return this.dataService.getData('users').map
  // }

  getMonsterData() : Monsterdetail{
    // this.dataService.getData('users').subscribe(monsters =>{
    //   this.allMonsterInfo = monsters
    // } );

    // this.monsterInfo = this.allMonsterInfo.find((x: Monsterdetail) => {
    //   return x.id === 1;
    // });

    return {
      email: 'abc@emal',
      id: 1,
      name: 'dummy name',
      username: 'dummy username',
      
        website: 'mydummywebsite.com',
      phone: '123456',
      address: {
        street: '123',
        city: 'NY',        
        suite: 'default suite',
        zipcode: '123456',
        geo: {
          lat: 'default lat',
          lng: 'defaul lon'
        }    
      },
      company: {
        catchPhrase: 'catch phrase',
        name: 'default company',
        bs: "bs string"         
      },
    }

    // console.log(this.id)
    // console.log('This is monster data 2: ',this.allMonsterInfo)
    // this.monsterInfo = this.allMonsterInfo.find(x => x.id === this.id) || {
    //     email: 'abc@emal',
    //     id: 1,
    //     name: 'dummy name',
    //     username: 'dummy username',
    //   }
  }
}
