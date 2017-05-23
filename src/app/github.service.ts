import { Http , Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username :string;
  constructor(private http: Http) { }

  getUser(username) {
    return this.http.get('https://api.github.com/users/'+username)
    .map(res => res.json());
  }

  getRepos(username) {
    return this.http.get('https://api.github.com/users/'+username+'/repos')
    .map(res => res.json());
  }

 
}
