import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote"

@Component({
  selector: 'my-Quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes = [
   new Quote ("Love", "Dr. Suess", "You know you’re in love, when you can’t fall asleep because reality is finally better than your dreams.",0, 0),
    
   new Quote ("Me", "Marilyn Monroe", "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best", 0, 0)
  ]
    

  addQuote(chosenQuote) {
    this.quotes.push(chosenQuote)
  }

  upvote(i) {
    this.quotes[i].upvotes ++;
  }
  downvote(i) {
    this.quotes[i].downvotes  ++;
  }
  delQuote(i) {
    this.quotes.splice(i, 1)
  }
  preNum:number
  lastNum:number
  counter:number

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return  this.preNum
  }



constructor() { }

ngOnInit() {
}

}