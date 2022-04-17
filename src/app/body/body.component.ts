import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  datas: Data[];
  alertService: AlertService;
  data: Data;

  // goToUrl(data: string) {
  //   this.router.navigate(['/data', String])
  
  // constructor(
  //   private http: HttpClient,
  //   dataService: DataService,
  //   alertService: AlertService,
  //   private dataService: DataRequestService,
  //   private router: Router) 
  // )
  //   {
  //   this.data = alertService.getDatas()
  //   this.alertService = alertService;
  //  }

  ngOnInit(): void {
    
//     interface ApiResponse{
//       profile:String;
//       Repositories:String
//   }
// this.http.get<ApiResponse>("http://data.stormconsultancy.co.uk/random.json").subscribe(data=>{
//       // Succesful API request
//       this.datas = new Data(data.profile, data.Repositories)
//     })
  }
}
