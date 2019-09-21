import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private TRANSACTIONS_URL = 'https://nodebackendteam20-dot-gcloudtutorial-253103.appspot.com/api/special'

  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get<any>(this.TRANSACTIONS_URL)
  }


}
