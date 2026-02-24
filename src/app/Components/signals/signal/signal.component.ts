import { Component, computed, effect, OnInit, signal } from '@angular/core';
import { interval, single } from 'rxjs';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent implements OnInit {
  count = signal(0)
  myName = signal("Mahendiran");
  role = signal("Software Engineer");
  numberChange = signal('Initial Value')

  // Normal Sum
  price = signal(100);
  qty = signal(10);
  total = computed(() => this.price() * this.qty())
  user = {
    name: 'Mahendiran',
    age: 23
  }
  incrementAge = signal(this.user.age)
  fullText = computed(() => `My name is ${this.role()}`)

  constructor() { 
    effect(() => {
      console.log('singnal changes trigered', this.numberChange());

    })
  }
  ngOnInit(): void {
    this.myName.set('Software Engineer')
    setTimeout(() => {
      return console.log('Data fetching..');

    }, 2000);
  }
  Increment() {
    this.incrementAge.update(val => val + 1)
    interval()
  }
  logValueTrack() {
    this.numberChange.set(' trigger')

  }

  //using effect
  loading = signal(false)

}
