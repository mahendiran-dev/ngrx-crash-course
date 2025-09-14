import { Component } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { CartItemService } from '../../Services/cart-item.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  Products: any[] = []
  constructor(private ApiService: ApiService, private CartService: CartItemService) { }

  ngOnInit() {
    this.ApiService.GetProducts().subscribe((res: any) => {
      this.Products = res
      console.log(this.Products);
    })
  }
  AddCart(id: number) {
    this.CartService.AddItem(id)
  }
  RemoveCart(id: number) {
    this.CartService.RemoveItem(id)
  }
}