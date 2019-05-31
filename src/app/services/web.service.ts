import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable()
export class WebService {

  private leaders = 'https://courseracourse-22cd9.firebaseio.com/leadership.json';  // URL to web api
  constructor(private http: HttpClient) { }

  getTable( ) {
    return this.http.get(this.leaders);
  }

  addLeader( ) {
    console.dir('adding leader');
    this.http.patch(this.leaders, {
      '4':{
      abbr:"CEO",
      description:"Our CEO, Peter, credits his hardworking East As...",
      designation: "Outro CIEO",
      featured: false,
      id:  "4",
      image: "images/alberto.png",
      name: "Peter Pan",}}).subscribe(
        result => console.dir(result),
        error => console.dir(error)
      )
  }

}