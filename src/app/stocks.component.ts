import {Component} from '@angular/core';
import {StockService} from './stock.service';

@Component ({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
        {{title}}
        <ul>
            <li *ngFor="let stock of stocks">{{stock}}</li>
        </ul>

        <hr>

        {{stockMarkets.length}}

        <ul *ngIf="stockMarkets.length == 4">
            <li *ngFor="let stockMarket of stockMarkets">{{stockMarket}}</li>
        </ul>
        `
})

export class StocksComponent {
    title = 'List of Stocks';
    stocks = [];
    showStockMarket = true;

    stockMarkets = ['NYSE', 'NASDAQ', 'EURONEXT', 'HKSE', 'LSE'];

    constructor(stockService: StockService) {
        this.stocks = stockService.getStocks();
    }
}
