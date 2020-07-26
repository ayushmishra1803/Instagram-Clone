import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  exports: [
    FlexLayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {}
