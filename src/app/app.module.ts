import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateCountPipe } from './date-count.pipe/datecountPipe';
import { FormComponent } from './form/form.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DetailsComponent } from './component/details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    DateCountPipe,
    FormComponent,
    QuotesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
