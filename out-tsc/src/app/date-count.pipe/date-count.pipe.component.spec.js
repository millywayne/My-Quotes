import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { DateCountPipe } from './date-count.pipe.component';
describe('DateCountPipe', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [DateCountPipe]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DateCountPipe);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=date-count.pipe.component.spec.js.map