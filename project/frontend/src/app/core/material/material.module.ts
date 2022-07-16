import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



import {
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatSliderModule,
  MatDatepickerModule,
  MatTabsModule,
  MatPaginatorModule,
  MatCardModule,
  MatExpansionModule,
  MatGridListModule,
  MatDividerModule,
  MatListModule,
  MatSelectModule,
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
  ],
  exports: [
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatTabsModule,
    MatSelectModule,
  ]
})
export class MaterialModule { }
