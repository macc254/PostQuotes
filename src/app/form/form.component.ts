import { Component, OnInit,  Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
newQuote = new Quote(" "," "," ",new Date(),0,0,false);
@Output() addQuote = new EventEmitter<Quote>();
  quoteForm: any;

submitQuote(){
  this.addQuote.emit(this.newQuote);
  this.quoteForm.reset();
}
quotes: Quote[] = [
  new Quote('The greatest glory in living lies not in never falling, but in rising every time we fall. ','Nelson Mandela','Mercy Bore',new Date(2020,3,13),0,0,false),
  new Quote('The way to get started is to quit talking and begin doing.','Walt Disney','Mercy Bore',new Date(2020,3,13),0,0,false)
  ];

  constructor() { }

  ngOnInit(): void {
  }
}