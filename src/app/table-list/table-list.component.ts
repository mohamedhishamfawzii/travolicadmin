import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private backconnector : BackendService) { }
 redirects;
 searches;
 newsletter;
 type;
 searchb;
 redirectb;
 newsb;

  ngOnInit() {

    this.backconnector.getRedirections().then((result) => {
      console.log("here");
      console.log(JSON.parse(result._body));
this.redirects = JSON.parse(result._body).response ;
this.redirects.reverse();
  });
  this.backconnector.getSearches().then((result) => {
    console.log("here");
    console.log(JSON.parse(result._body));
this.searches = JSON.parse(result._body).response ;
this.searches.reverse();

});
this.backconnector.getNewsletter().then((result) => {
  console.log("here");
  console.log(JSON.parse(result._body));
this.newsletter = JSON.parse(result._body).response ;
this.newsletter.reverse();
});
  }




}
