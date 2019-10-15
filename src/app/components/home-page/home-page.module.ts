import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CoreMaterialModule } from '../../commons/core-material/core-material.module';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CoreMaterialModule,
    HomePageRoutingModule
  ],
  exports: [
    CoreMaterialModule
  ]
})
export class HomePageModule { }
