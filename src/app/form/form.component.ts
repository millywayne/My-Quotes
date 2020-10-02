import { Output, EventEmitter, Component, OnInit,  } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'quote-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteWords:string
  quoteEditor:string
  quoteAuthor:string
  quoteDate:number
  theWords:any
  upvote: number;
  downvote: number;

  submitQuote(){
    this.theWords = new Quote(this.quoteEditor,this.quoteAuthor,this.quoteWords,this.upvote,this.downvote)
    this.quoteWords=''
    this.quoteAuthor=''
    this.quoteEditor=''
    this.emitQuote.emit(this.theWords)
  }

 constructor() { }

  ngOnInit() {
  }

}