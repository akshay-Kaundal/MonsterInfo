import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addmonster',
  templateUrl: './addmonster.component.html',
  styleUrls: ['./addmonster.component.css']
})
export class AddmonsterComponent {
  addMonsterForm: any;

  constructor(private formBuilder: FormBuilder){
    this.createMonsterDetailForm();
  }

  createMonsterDetailForm(){
    this.addMonsterForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      website: new FormControl(null, [Validators.required]),
      company: new FormControl(null, [Validators.required])
    })
  };

  addMonsterDetail(){
    if(this.addMonsterForm.valid){
      alert('Submiting your form');
    } else {
      alert('Form is not valid');
    }
  }
}
