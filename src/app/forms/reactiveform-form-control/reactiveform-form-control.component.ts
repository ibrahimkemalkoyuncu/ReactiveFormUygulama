import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactiveform-form-control',
  templateUrl: './reactiveform-form-control.component.html',
  styleUrls: ['./reactiveform-form-control.component.css']
})
export class ReactiveformFormControlComponent {

  loginForm:FormGroup;

  countryMenu: CountryDropMenu[] = [{text:"Seçiniz",value:0},{text:"Türkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}];
  genderMenu: GenderRadioMenu[] = [{text:"Erkek",value:1},{text:"Kadın",value:2}];
  constructor() {

    this.loginForm = new FormGroup({

      userName: new FormControl(),
      password:new FormControl(),
      rememberMe: new FormControl(false),
      country:new FormControl(0),
      gender:new FormControl(1)
    })
  }


  signing(){
    console.log(this.loginForm.value);
  }
}
