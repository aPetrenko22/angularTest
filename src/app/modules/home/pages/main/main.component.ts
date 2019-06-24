import { ModalComponent } from './../../components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  public openDialog(): void {
    this.dialog.open(ModalComponent, {
      width: '250px',
    });
  }
}
