import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {

  transactions: any[] = [];

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit(): void {
    this.transactionService.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  viewDetails(id: number): void {
    this.router.navigate(['/transaction-details', id]);
  }
}
