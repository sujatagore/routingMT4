import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/shared/module/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  productId !: string;
  productObj !: Iproducts;

  constructor(
    private _productService : ProductsService,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productParams();
  }

  productParams(){
    this._routes.params
      .subscribe((params : Params) =>{
        this.productId = params['productId']
        if (this.productId) {
          this.productObj = this._productService.getProductDetail(this.productId)!;
        }
      })
  }

  onProductRemove(){
    if (this.productId) {
      this._productService.removeProduct(this.productId)
    }
  }

  get fullStars(): number[]{
    return Array(Math.floor(this.productObj.rating)).fill(0);
  }

  get halfStar(): boolean{
    return this.productObj.rating % 1 !== 0;
  }

  get emptyStar(): number[]{
    return Array(5 - Math.ceil(this.productObj.rating)).fill(0);
  }
}
