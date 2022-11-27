import { Component, OnInit,Input } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productList:Array<any>=[];

  @Input() product:any=[];
  constructor(private route: ActivatedRoute ,private productservice:ProductService) { }

  ngOnInit() {
    
    
  }

}
