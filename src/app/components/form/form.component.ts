import { Component, OnInit ,Output, EventEmitter   } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() submitForm: EventEmitter<string> = new EventEmitter();
  username :any;
  constructor() {
   
   }

  ngOnInit(): void {
    
  }
  onSubmit()
  {
    this.submitForm.emit(this.username);
  }

}
