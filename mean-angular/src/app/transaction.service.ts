import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions = [
    {
      id: 1,
      date: '01/10/2020',
      comments: 'Utility bill',
      status: 'COMPLETED'
    },
    {
      id: 2,
      date: '15/10/2020',
      comments: 'Rent',
      status: 'PENDING'
    }
  ];

  getTransactions(): Observable<any[]> {
    return of(this.transactions);
  }

  getTransactionById(id: number): Observable<any> {
    const transaction = this.transactions.find(t => t.id === id);
    return of(transaction);
  }

  updateTransaction(id: number, comments: string): void {
    const transaction = this.transactions.find(t => t.id === id);
    if (transaction) {
      transaction.comments = comments;
    }
  }
}
