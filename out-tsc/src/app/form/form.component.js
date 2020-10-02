import { __decorate } from "tslib";
import { Output, EventEmitter, Component, } from '@angular/core';
import { Quote } from '../quote';
let FormComponent = class FormComponent {
    constructor() {
        this.emitQuote = new EventEmitter();
    }
    submitQuote() {
        this.theWords = new Quote(this.quoteEditor, this.quoteAuthor, this.quoteWords);
        this.quoteWords = '';
        this.quoteAuthor = '';
        this.quoteEditor = '';
        this.emitQuote.emit(this.theWords);
    }
    ngOnInit() {
    }
};
__decorate([
    Output()
], FormComponent.prototype, "emitQuote", void 0);
FormComponent = __decorate([
    Component({
        selector: 'quote-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.css']
    })
], FormComponent);
export { FormComponent };
//# sourceMappingURL=form.component.js.map