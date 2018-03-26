import { Component,Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CollectiveLearningService } from '../../../collectiveLearning.service';
import { FormGroup, FormBuilder, ReactiveFormsModule, Validators, FormControl, FormArray } from '@angular/forms';
import { Detail } from '../../../shared/detail';
import { Dialogs } from '../../../shared/dialogs'

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {
  detail: Detail;
  collaboratorName: string;
  collaboratorId: string;
  editDetailForm: FormGroup;
  greeting: string;

  constructor(public dialog: MatDialog, 
              private service : CollectiveLearningService, 
              @Inject(MAT_DIALOG_DATA) public data: any,
              private dialogRef: MatDialogRef<EditDialogComponent>
             ) {
        this.detail = data.detail;
        this.greeting = Dialogs.editDialogGreeting;
        this.collaboratorName = data.collaboratorName;
        this.collaboratorId = data.collaboratorId;
        this.editDetailForm = new FormGroup({
            'expertise': new FormControl("", [Validators.max(2), Validators.min(1)])
        });
  }

  ngOnInit() {
  }
  
  updateDetail(){
        this.service.addDetail(this.collaboratorId, this.detail)
                     .subscribe(data => this.dialogRef.close(data));
        
  }

  cancelDialog(){
    console.log('her');
    this.dialogRef.close();
  }

}
