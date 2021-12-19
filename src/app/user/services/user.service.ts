import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '@services/storage.service';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { UserInterface } from '../models/user-interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private storageService: StorageService,
    private httpClient: HttpClient
  ) { }

  public signin(credentials: UserInterface): Observable<HttpResponse<any>> {
    return this.httpClient.post(
      `${environment.api}user/signin`,
      credentials,
      {
        observe: 'response'
      }
    ).pipe(
      tap((response: HttpResponse<any>) => {
        if (response.status === 200) {
          this.storageService.store(response.body.token);
        }
      })
    );
  }

  public signup(account: UserInterface): Observable<HttpResponse<any>> {
    // Sets USER_ROLE before to send to backend
    account.roles = ['ROLE_USER'];

    return this.httpClient.post(
      `${environment.api}user/signup`,
      account,
      {
        observe: 'response'
      }
    );
  }

  public signout(): void {}
}
