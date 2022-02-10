import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote!:Quote;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  quotes: Quote[] = [
   new Quote('The greatest glory in living lies not in never falling, but in rising every time we fall. ','Nelson Mandela','Mercy Bore',new Date(2020,3,13),0,0,false),
   new Quote('The way to get started is to quit talking and begin doing.','Walt Disney','Mercy Bore',new Date(2020,3,13),0,0,false)
   ];

  toggleAuthor(index: any){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }
  deleteQuote(isComplete: any, index: number){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote: Quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.quoteDate = new Date(quote.quoteDate);
    this.quotes.push(quote);
  }
  
}