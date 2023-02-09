import { Component } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-deck-dialog',
  templateUrl: './create-deck-dialog.component.html',
  styleUrls: ['./create-deck-dialog.component.css']
})
export class CreateDeckDialogComponent {
  protected deckName: string = "";

  constructor(
    protected dialogRef: MatDialogRef<CreateDeckDialogComponent>,
  ) {
  }

  protected onCancel(): void {
    this.dialogRef.close();
  }
}
