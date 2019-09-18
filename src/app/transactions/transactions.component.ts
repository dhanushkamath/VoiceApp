import { TransactionsService } from './../transactions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  transactions = []
  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
    this.transactionsService.getTransactions()
    .subscribe(
      res => this.transactions = res,
      err => console.log(err)
    )
  }


}
