import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  data: Data[];

  constructor() { }

  ngOnInit(): void {
    
    interface ApiResponse{
      profile:string;
      Repositories:string
  }
this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe(data=>{
      // Succesful API request
      this.data = new Data(data.profile, data.Repositories)
    })
  }
}
