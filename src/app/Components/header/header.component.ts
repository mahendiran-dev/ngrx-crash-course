import { Component, OnInit } from '@angular/core';
import { CartItemService } from '../../Services/cart-item.service';
import { ThemeService } from '../../Services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  CartCount = 0
  CurrentTheme: any
  constructor(private CartService: CartItemService, private ThemeService: ThemeService) { }
  ngOnInit() {
    this.CartService.CartIems$.subscribe(res =>
      this.CartCount = res.length
    )
  }
  ThemeChange() {
    this.ThemeService.theme$.subscribe(res =>
      this.CurrentTheme = res
    )
    alert(this.CurrentTheme);

  }
}
