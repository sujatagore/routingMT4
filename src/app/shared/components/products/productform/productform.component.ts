import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivate, Iproducts } from 'src/app/shared/module/products.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit, IcanDeactivate {

  productForm !: FormGroup;
  isinEditMode : boolean = false;
  productId !: string;
  prodObj !: Iproducts;
  canReturn !: number;
  isUpdated : boolean = false;

  constructor(
    private _uuidService : UuidService,
    private _productsService : ProductsService,
    private _routes : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createProductForm();
    this.patchProduct();
    this.manageQueryParams();
  }

  createProductForm(){
    this.productForm = new FormGroup({
        pname: new FormControl(null, [Validators.required]),
        pstatus: new FormControl(null, [Validators.required]),
        canReturn: new FormControl(null,[Validators.required]),
        productDescription: new FormControl(null, [Validators.required]),
        price: new FormControl(null,[Validators.required]),
        brand: new FormControl(null, [Validators.required]),
        rating: new FormControl(null,[Validators.required]),
        images: new FormControl(null, [Validators.required])
    })
  }

  onProductAdd(){
    if (this.productForm.valid) {
      let newPro : Iproducts = {...this.productForm.getRawValue(), pid: this._uuidService.uuid(),
          canReturn : +this.productForm.get('canReturn')?.value
      }
      this._productsService.addProduct(newPro)
    }
  }

  onUpdateProduct(){
    if (this.productForm.valid) {
      let updObj : Iproducts = {...this.productForm.value(), canReturn: +this.productForm.get('canReturn')?.value, pid: this.productId}
      this.isUpdated = true;
      this._productsService.updateProduct(updObj)
    }
  }

  patchProduct(){
    this.productId = this._routes.snapshot.params['productId'];
    if (this.productId) {
      this.isinEditMode = true;
      this.prodObj = this._productsService.getProductDetail(this.productId)!;
      this.productForm.patchValue({...this.prodObj, canReturn: this.prodObj.canReturn.toString()})
    } else {
      this.isinEditMode = false
    }
  }

  manageQueryParams(){
    this.canReturn = +this._routes.snapshot.queryParams['canReturn'];
    if (this.canReturn === 0) {
      this.productForm.disable()
    } else {
      this.productForm.enable()
    }
  }

  canDeactive() : boolean | Observable<boolean> | Promise<boolean>{
    if (this.productForm.dirty && !this.isUpdated) {
      let getConfirm = confirm(`Are you sure you want to discard the changes?`);
      return getConfirm
    } else {
      return true
    }
  }

}
