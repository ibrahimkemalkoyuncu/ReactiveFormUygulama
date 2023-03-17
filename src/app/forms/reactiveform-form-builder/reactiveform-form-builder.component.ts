import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactiveform-form-builder',
  templateUrl: './reactiveform-form-builder.component.html',
  styleUrls: ['./reactiveform-form-builder.component.css']
})
export class ReactiveformFormBuilderComponent implements OnInit{
  loginForm:FormGroup;
  countryMenu: CountryDropMenu[] = [{text:"Seçiniz",value:0},{text:"Türkiye",value:1},{text:"Almanya",value:2},{text:"Fransa",value:3}];
  genderMenu: GenderRadioMenu[] = [{text:"Erkek",value:1},{text:"Kadın",value:2}];

  constructor(fb:FormBuilder) {

    this.loginForm = fb.group({

      userName: fb.control('',Validators.required), //FormControl
      password: fb.control('',[Validators.required,Validators.minLength(4)]),
      rememberMe: false,
      country:0,
      gender:[1]

    })
  }
  ngOnInit(): void {
    this.loginForm.get("userName")?.valueChanges;
  }


  signing(){
    console.log(this.loginForm.value);
  }
}
