import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IReport } from '../models/report.interface';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private locationUrl: string =
  'http://api.open-notify.org/iss-now.json';

  public loading$: Subject<boolean> = new Subject();
  
  
  private reports  : IReport[] = [
  
   
  ];


  private _reportSubject : BehaviorSubject<Array<IReport>>=new BehaviorSubject(this.reports)
  constructor(private http: HttpClient) { }


  public getLocation() {
    return this.http.get(this.locationUrl);
    
   
  }

  public startLoading() {
    this.loading$.next(true);
  }

  public stopLoading() {
    this.loading$.next(false);
  }

}
