import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-player-dialog',
  templateUrl: './create-player-dialog.component.html',
  styleUrls: ['./create-player-dialog.component.css']
})
export class CreatePlayerDialogComponent {
  protected username: string = "";

  constructor(
    protected dialogRef: MatDialogRef<CreatePlayerDialogComponent>,
  ) {
  }

  protected onCancel(): void {
    this.dialogRef.close();
  }
}
