import { Component, OnInit } from '@angular/core';
import {GitHubService} from '../git-hub.service';

@Component({
  selector: 'app-starred-github',
  templateUrl: './starred-github.component.html',
  styleUrls: ['./starred-github.component.css']
})
export class StarredGithubComponent implements OnInit {
     list;
     listItems={items:[]};
     currentPage:number=0;
     totalPages:number;
     size:number=30;
  constructor(private gitHubService:GitHubService) { }

  ngOnInit() {
   this.onSearch();
  }
     //search list of items
    onSearch(){
      this.gitHubService.getlist(this.currentPage)
        .subscribe(data=>{
          this.list=data;
          this.totalPages=this.list.total_count / this.size;

          if(this.list.total_count % this.size !=0) ++this.totalPages;
          this.list.items.forEach(i=>{
            this.listItems.items.push(i);
          })

          console.log(this.list);
        },err=>{
          console.log(err);
        })
    }
    // infinit scroling for pagination
    onScroll() {
  if( this.currentPage<this.totalPages){
    ++this.currentPage;
    this.onSearch();
  }
  }
}
