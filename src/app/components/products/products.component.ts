import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  today = new Date();
  anotherDay = new Date(2021, 1, 21);
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [ ];
  constructor(private storeService: StoreService, private productsService: ProductsService){
    this.myShoppingCart = storeService.getShoppingCart();
  }
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    })
  }
  onAddToShoppingCart(product: Product){
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
