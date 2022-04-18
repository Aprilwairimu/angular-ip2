import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  datas: Data[];

  data: Data;

 

 

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
