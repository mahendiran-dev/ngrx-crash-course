import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss'
})
export class SwitchMapComponent implements OnInit {
  search$ = new Subject<string>()
  jsonDetails: any
  sample_url = 'https://jsonplaceholder.typicode.com/'
  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    this.loadData()
    this.getJsonPlaceholderData().subscribe((res: any) => {
      this.jsonDetails = res
    })
  }

  loadData() {
    this.search$.pipe(debounceTime(300), distinctUntilChanged(), switchMap(val => {
      val = val.trim()
      if (val === '') return this.getJsonPlaceholderData()
      return this.http.get(`${this.sample_url}/posts?title_like=${val}`)
    })).subscribe(res =>
      this.jsonDetails = res
    )
  }

  getJsonPlaceholderData() {
    return this.http.get(`${this.sample_url}/posts`)
  }
  onSearch(event: any) {
    this.search$.next(event.target.value)
  }
}