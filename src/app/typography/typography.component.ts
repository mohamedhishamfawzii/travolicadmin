import { Component, OnInit } from '@angular/core';
import {BackendService} from '../backend.service';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {

  constructor(private backconnector : BackendService) { }
  redirects;
  searches;
  newsletter;
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
