import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrl: './create-emp.component.scss'
})
export class CreateEmpComponent implements OnInit {
  subscription!: Subscription;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    const url = this.route.snapshot.paramMap.get('id')
  }
}
