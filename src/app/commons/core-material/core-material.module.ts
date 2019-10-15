import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule, MatCheckboxModule, MatSidenavModule,
  MatToolbarModule, MatInputModule, MatRadioModule,
  MatSelectModule, MatMenuModule, MatGridListModule,
  MatCardModule, MatIconModule, MatProgressSpinnerModule,
  MatProgressBarModule, MatDialogModule, MatTooltipModule,
  MatSnackBarModule, MatTabsModule, MatExpansionModule,
  MatAutocompleteModule, MatStepperModule, MatListModule,
  MatChipsModule, MatDatepickerModule, MatNativeDateModule,
  MatTreeModule, MatButtonToggleModule, MatTableModule,
  MatRippleModule
} from '@angular/material';

const MAT_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatMenuModule,
  MatGridListModule,
  MatCardModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTabsModule,
  MatExpansionModule,
  MatAutocompleteModule,
  MatStepperModule,
  MatListModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTreeModule,
  MatButtonToggleModule,
  MatTableModule,
  MatRippleModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MAT_MODULES
  ],
  exports: [
    MAT_MODULES
  ]
})
export class CoreMaterialModule { }
