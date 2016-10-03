import {Component} from '@angular/core';

@Component ({
    selector: 'stocks',
    template: `<h2>Stocks</h2>
        {{title}}
        <ul>
            <li *ngFor="let stock of stocks">{{stock}}</li>
        </ul>
        `
})

export class StocksComponent {
    title = 'List of Stocks';
    stocks = ['AAPL', 'IBM', 'GOOG', 'UDEMY'];
}