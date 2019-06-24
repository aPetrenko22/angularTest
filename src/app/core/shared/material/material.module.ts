import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
} from '@angular/material';

const components = [
  MatSidenavModule,
  MatInputModule,
  MatMenuModule,
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatTableModule,
  MatSortModule,
];

@NgModule({
  imports: components,
  exports: components,
})
export class MaterialModule {}
