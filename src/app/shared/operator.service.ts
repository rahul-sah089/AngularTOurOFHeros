import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({ providedIn: 'root' })
export class OperatorService {
  public API = "//localhost:8090";
  public OPERATOR_API = this.API + "/cars";
  constructor(private http: HttpClient) {

  }

  getAll(): Observable<any> {
    //return this.http.get(this.API +"/cool-cars");
    return this.http.get("./assets/data/operators.json");
  }

  get(id: string) {
    return this.http.get(this.API + "/" + id);
  }

  save(car: any): Observable<any> {
    let result: Observable<Object>;
    if (car['href']) {
      result = this.http.put(car.href, car);
    } else {
      result = this.http.post(this.OPERATOR_API, car);
    }
    return result;
  }

  remove(href:string){
    return this.http.delete(href);
  }
}
