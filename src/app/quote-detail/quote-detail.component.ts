import { Component, Input, OnInit,  Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote!:Quote;
  @Output() isComplete = new EventEmitter<boolean>();
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}
public addvote(quote1:any){
  quote1.upvote++;
}

public reducevote(quote1:any){
  quote1.downvote++;
}
  constructor() { }

  ngOnInit(): void {
  }
  quotes: Quote[] = [
    ];

}