import { Component, OnInit,Input } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  listOfProduct :Array<any>=[];
  @Input() 
  myTotolPrice:any;
  username:any;
  tmp:string='hello';
 
  constructor(private router:Router ,private  productService : ProductService) { 
  }

  

  ngOnInit(): void {

    this.listOfProduct=this.productService.getproductList();
    
  }

  submitForm(username:any)
  {
    this.router.navigateByUrl(`success/${username}`);
  }
 
 
}
   
   
   

