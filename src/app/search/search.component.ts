import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  UserInput: string = "";
  user: any;
  // repos:any[]
  constructor(
    private userservice: UserService,
    // private http:HttpClient
  ) { }

  ngOnInit(): void { }
  // getRepo(userName: string) {
  //   return this.http.get('https://api.github.com/users/' + this.userName + '/repos');
  // }
  getUsername(getUsername: string) {
    // console.log(username)
    this.userservice.getUser(getUsername).then((result) => this.user=result);
}
}
