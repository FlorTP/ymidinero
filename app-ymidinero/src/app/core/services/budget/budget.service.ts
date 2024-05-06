import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor(private http:HttpClient) { }

  listarMeses():Observable<any>{
    return this.http.get(`assets/apis/meses.json`);
  }
}
