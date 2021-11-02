import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ReportService } from 'src/app/services/report.service';
import { DialogOverviewExampleDialogComponent } from '../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

import { Subscription } from 'rxjs';
import { IReport } from 'src/app/models/report.interface';

@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',
  styleUrls: ['./dialog-overview-example.component.scss']
})
export class DialogOverviewExampleComponent implements OnInit {

  note: string;
  location: Array<IReport>=[];
 
  
  private subscription:Subscription= new Subscription();

  constructor(public dialog: MatDialog,private reportService: ReportService) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {name: this.location, animal: this.note}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.note = result;
    });
  }


  ngOnInit(): void {
  
    this.subscription.add(
      this.reportService.getLocation().subscribe(data=>{
    //  this.name= data;
       console.log(data);
      })
 
     )
   }
  }



