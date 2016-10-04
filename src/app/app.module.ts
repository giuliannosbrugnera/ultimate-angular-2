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
import { DashboardComponent } from './dashboard/dashboard.component';
import {CurrencyService} from './currency.service';
import { BondsDirective } from './bonds.directive'

@NgModule({
  declarations: [
    AppComponent,
    MutualfundsComponent,
    StocksComponent,
    StockDirectiveDirective,
    HighlightDirective,
    DateFormatterPipe,
    DashboardComponent,
    BondsDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [StockService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
