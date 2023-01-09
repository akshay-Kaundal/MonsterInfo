import { ReadVarExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { Monsterdetail } from '../Model/monsterdetail';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-monstercard',
  templateUrl: './monstercard.component.html',
  styleUrls: ['./monstercard.component.css']
})
export class MonstercardComponent implements OnInit {
  @Input() detail: Monsterdetail;
  image: any;
  subs = new Subscription();
  safeImage: SafeUrl;
  imageToShow : any;

  constructor(private dataService: DataService, private sanitizer: DomSanitizer)
  {
    // this.detail = {
    //   email: 'abc@emal',
    //   id: 1,
    //   name: 'dummy name',
    //   username: 'dummy username',
    //   // address: {}
    // }
  }

  ngOnInit(){
    // console.log('this is card id', this.detail.id) 
    // this.image = this.dataService.getImage(this.detail.id);
    // this.subs.add(
    //   this.dataService.getImage(this.detail.id).subscribe(monsterImage => {
    //     console.log('Prinitng Image');
    //     console.log(monsterImage);
        
    //     this.safeImage = this.sanitizer.bypassSecurityTrustUrl(monsterImage);
    //     console.log(this.safeImage);
    //   })
    // )
    this.dataService.getImage(this.detail.id).subscribe(data =>{
        this.createImageFromBlob(data)
      })
  }

  createImageFromBlob(image: Blob){
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imageToShow = reader.result;
    }, false);
    
    if(image){
      reader.readAsDataURL(image);
    }

  }


}
