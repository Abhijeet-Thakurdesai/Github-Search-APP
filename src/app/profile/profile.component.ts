import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private user:any[];
  private repos:any[];
  private search :any;
  constructor(private gitservice : GithubService) { 
  }
  searchUser(username) {
    this.search = username;
     this.gitservice.getUser(username).subscribe( user => {
      this.user = user;
    });

    this.gitservice.getRepos(username).subscribe( repos => {
      this.repos = repos;
    });
  }

  ngOnInit() {
  }

}
