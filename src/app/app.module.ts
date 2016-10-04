import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StocksComponent} from './stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { StockDirectiveDirective } from './stock-directive.directive';
import {HighlightDirective} from './highlight.directive';
import {StockService} from './stock.service';
import { DateFormatterPipe } from './date-formatter.pipe';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    StockDirectiveDirective,
    HighlightDirective,
    DateFormatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
