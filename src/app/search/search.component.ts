import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  Userinput: string = "";
  user: any;
  constructor(
    private userservice: UserService
  ) { }

  ngOnInit(): void {
  }
  getUsername(getUsername: string) {
    // console.log(username)
    this.userservice.getUser(getUsername).then((result) => this.user=result);
}
}
