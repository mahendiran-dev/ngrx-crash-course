import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private CartItems = new BehaviorSubject<any[]>([]);
  CartIems$ = this.CartItems.asObservable();
  constructor() { }
  AddItem(id: number) {
    const currentItems = this.CartItems.value
    this.CartItems.next([...currentItems, id])
    console.log(currentItems);
  }
  RemoveItem(id: number) {
    const currentItems = [...this.CartItems.value]
    const index = currentItems.indexOf(id)
    if (index !== -1) {
      currentItems.splice(index, 1)
    }
    this.CartItems.next(currentItems)
  }
}
