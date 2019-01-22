import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({ providedIn: 'root' })
export class OperatorService {
  public API = "//localhost:8090";
  public OPERATOR_API = this.API + "/operators";
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    //return this.http.get(this.API +"/cool-cars");
    return this.http.get(this.OPERATOR_API);
  }

  get(id: string) {
    var savedOperator = this.http.get(this.OPERATOR_API + "/" + id);
    return savedOperator;
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    result = this.http.post(this.OPERATOR_API, car);
    return result;
  }

  remove(href: string) {
    return this.http.delete(this.OPERATOR_API + "/" + href);
  }
}
