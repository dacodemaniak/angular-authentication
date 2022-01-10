import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RemoteDataService {

  constructor() { }

  public checkPseudo(pseudo: string): Observable<HttpResponse<any>> {

    if (pseudo === 'admin') {
      return of(new HttpResponse({
        status: 404,
        body: 'Username already used'
      }));
    }

    return of(new HttpResponse({
      status: 200,
      body: 'Username was not found'
    }));
  }
}
