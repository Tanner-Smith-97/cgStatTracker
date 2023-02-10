import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-game-dialog',
  templateUrl: './create-game-dialog.component.html',
  styleUrls: ['./create-game-dialog.component.css']
})
export class CreateGameDialogComponent {

  protected username: string = "";

  constructor(
    protected dialogRef: MatDialogRef<CreateGameDialogComponent>,
  ) {
  }
  protected onCancel(): void {
    this.dialogRef.close();
  }
}
