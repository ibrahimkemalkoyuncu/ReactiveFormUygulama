import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformFormBuilderComponent } from './forms/reactiveform-form-builder/reactiveform-form-builder.component';
import { ReactiveformFormControlComponent } from './forms/reactiveform-form-control/reactiveform-form-control.component';

@NgModule({
  declarations: [
    AppComponent,

    ReactiveformFormBuilderComponent,
     ReactiveformFormControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
