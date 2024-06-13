import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  transaction: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.transactionService.getTransactionById(id).subscribe(data => {
      this.transaction = data;
    });
  }

  save(): void {
    this.transactionService.updateTransaction(this.transaction.id, this.transaction.comments);
    this.router.navigate(['/transaction-list']);
  }
}
