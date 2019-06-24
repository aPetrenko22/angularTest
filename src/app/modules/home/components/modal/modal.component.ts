import { HomeService } from './../../../../core/services/home.service';
import { DialogData } from './../../pages/main/main.component';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private homeService: HomeService
  ) {}

  public onNoClick(): void {
    this.homeService.activate();
    this.dialogRef.close();
  }
}
