import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Customer } from './customer'
import { CustomerDetails } from './customerdetails'
import { HttpHeaders } from '@angular/common/http';
import { CustomerDetailsReq } from './customerdetailsreq'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {


  public CUSTOMER_LIST_API : string = '/customerlist';
  public CUSTOMER_DETAIL_API : string = '/customerdetailsapi';

  constructor(private http: HttpClient) { }

  public getCustomerList(): Observable<Customer[]> {
    return (this.http.get<Customer[]>(this.CUSTOMER_LIST_API));
  }

  public getCustomerDetails(id: number): Observable<CustomerDetails> {
    let req : CustomerDetailsReq = new CustomerDetailsReq();
    req.id = id;
    return (this.http.post<CustomerDetails>(this.CUSTOMER_DETAIL_API,req,httpOptions));
  }
}
