import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-sucessful-page',
  templateUrl: './sucessful-page.component.html',
  styleUrls: ['./sucessful-page.component.css']
})
export class SucessfulPageComponent implements OnInit {
  firstName: any;
 constructor(private route: ActivatedRoute)
 {
 

 }
  
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.firstName = params.get('username');
  })

}
}
