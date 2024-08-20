import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../../module/products.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productsData !: Array<Iproducts>

  constructor(
    private _router : Router,
    private _routes : ActivatedRoute,
    private _productsService : ProductsService
  ) {
    this._routes.data
      .subscribe(metaData =>{
         this.productsData = metaData['productsData'];
         this._router.navigate(['products', this.productsData[0].pid],{
          queryParams : {canReturn : this.productsData[0].canReturn},
          queryParamsHandling: 'merge'
         })
      })
  }

  ngOnInit(): void {
  }

}
