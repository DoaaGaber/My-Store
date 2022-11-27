import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  listOfproduct :Array<any> =[];
  totalPrice:any;
  selectedLevel:any;
  product :any=[];
  constructor(private productService :ProductService) { }

  ngOnInit(): void {
    this.productService.getproduct().subscribe(data => {
      this.listOfproduct = data;
   
    })
  }
  
  addProductToCart(product:any):void{

    this.productService.addToCart(product)
    
     alert("added");

  }
  sendProduct(products:any)
  {
         this.product=products;
          console.log(this.product.title);
  }

  
  
}
