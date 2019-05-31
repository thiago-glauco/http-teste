import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable()
export class WebService {

  private heroesUrl = 'https://courseracourse-22cd9.firebaseio.com/leadership.json';  // URL to web api
  constructor(private http: HttpClient) { }

  getTable( ) {
    console.dir (this.http.get(this.heroesUrl));
  }

}