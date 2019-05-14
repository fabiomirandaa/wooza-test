import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const env = environment;
@Injectable({
  providedIn: 'root'
})
export class PlanService {
  constructor(private http: HttpClient) { }

  getPlans(id) {
    return this.http.get(`${env.APIEndpoint}planos/${id}`)
      .pipe(map((res: any) => {
        return res.planos;
      }));
  }
}
