import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private Theme = new BehaviorSubject<string>('Dark')
  theme$ = this.Theme.asObservable()
  }
