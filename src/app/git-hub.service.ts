import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitHubService {

  host:string="https://api.github.com";
  constructor(private http: HttpClient) {}

   //fetch list of items
  getlist(page:number){
    return this.http.get(this.host+"/search/repositories?q=created:>2017-10-22&sort=stars&order=desc&page="+page);
  }

}
