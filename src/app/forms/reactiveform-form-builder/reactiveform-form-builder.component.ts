import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactiveform-form-builder',
  templateUrl: './reactiveform-form-builder.component.html',
  styleUrls: ['./reactiveform-form-builder.component.css']
})
export class ReactiveformFormBuilderComponent {
  loginForm:FormGroup;
  countryMenu: CountryDropMenu[] = [{text:"Seçiniz",value:0},{text:"Türkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}];
  genderMenu: GenderRadioMenu[] = [{text:"Erkek",value:1},{text:"Kadın",value:2}];

  constructor(fb:FormBuilder) {

    this.loginForm = fb.group({

      userName:'', //FormControl
      password:'',
      rememberMe: false,
      country:0,
      gender:[1]

    })
  }


  signing(){
    console.log(this.loginForm.value);
  }
}
