import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
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
