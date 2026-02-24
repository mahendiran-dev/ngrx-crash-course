import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-cancel-pre-api-call',
  templateUrl: './cancel-pre-api-call.component.html',
  styleUrl: './cancel-pre-api-call.component.scss'
})
export class CancelPreApiCallComponent {

  userSelection$ = new Subject<number>();
  userDetails: any;

  constructor(private http: HttpClient) {
    this.setupUserDetailsFetcher();
  }

  onSelect(event: any) {
    const id = Number(event.target.value);
    this.userSelection$.next(id);
  }

  setupUserDetailsFetcher() {
    this.userSelection$
      .pipe(
        switchMap(id => {
          console.log("API Started for user:", id);
          return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        })
      )
      .subscribe(res => {
        console.log("API Completed:", res);
        this.userDetails = res;
      });
  }
}
