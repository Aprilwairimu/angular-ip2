import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  

 

 

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
