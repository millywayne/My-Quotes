import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let DetailsComponent = class DetailsComponent {
    constructor() {
        this.upvotes = 0;
        this.downvotes = 0;
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], DetailsComponent.prototype, "quote", void 0);
DetailsComponent = __decorate([
    Component({
        selector: 'quote-details',
        templateUrl: './details.component.html',
        styleUrls: ['./details.component.scss']
    })
], DetailsComponent);
export { DetailsComponent };
//# sourceMappingURL=details.component.js.map