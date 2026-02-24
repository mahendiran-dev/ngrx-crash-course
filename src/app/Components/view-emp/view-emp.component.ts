import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrl: './view-emp.component.scss'
})
export class ViewEmpComponent {
  constructor(private http: HttpClient) { }
  // search = '';
  // users = [{ name: 'John' }, { name: 'Arun' }, { name: 'David' }];

  // get filteredUsers() {
  //   if (!this.search.trim()) return this.users;
  //   return this.users.filter(v =>
  //     v.name.toLowerCase().includes(this.search.toLowerCase())
  //   );
  // }

  // deleteUser(id: number) {
  //   this.users = this.users.filter((_, index) => index !== id);
  // }


  users = [];
  loading = false;
  load() {
    this.loading = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (r: any) => { this.users = r; this.loading = false; },
        error: () => this.loading = false
      })
  }
}