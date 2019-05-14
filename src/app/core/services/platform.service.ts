import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

const env = environment;
@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(private http: HttpClient) {

  }

  getAllPlatforms() {
    return this.http.get(`${env.APIEndpoint}/plataformas`)
      .pipe(
        map((res: any) => {
          localStorage.setItem('plataformas', JSON.stringify(res.plataformas));
          return res;
        })
      );
  }

  getSelectedPlatfom(name) {
    let platform = JSON.parse(localStorage.getItem('plataformas'));
    platform = platform.filter(item => item.nome.toLowerCase() === name);
    return platform[0];
  }
}
