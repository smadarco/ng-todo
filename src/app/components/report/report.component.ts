import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IReport } from 'src/app/models/report.interface';
import { ReportService } from 'src/app/services/report.service';




@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit ,OnDestroy{

  public reports :Array<IReport>=[];
  private subscription:Subscription= new Subscription();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  

 

  constructor(private reportService:ReportService) {
    
   }

  ngOnInit(): void {

    this.subscription.add(
     this.reportService.getReport().subscribe(data=>{
      this.reports= data;
     })

    )
  }

  ngOnDestroy()
  {
    this.subscription.unsubscribe();
  }

}
