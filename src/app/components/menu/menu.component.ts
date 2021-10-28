import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private reportService:ReportService) { }

  ngOnInit(): void {
   
      this.reportService.getReportbonos().subscribe((response:any)=>{
       console.log(response);
      });
  }

  

}
