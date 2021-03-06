import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RemoteDataService } from './../services/remote-data.service';

@Injectable()
export class UserNameValidator {
  public constructor(private remoteDataService: RemoteDataService){}

  public alreadyExists(
    control: FormControl
  ): any {

    return new Promise((resolve) => {
        this.remoteDataService.checkPseudo(control.value).subscribe((response: any) => {
        if(response.status === 200) {
          resolve(null);
        } else {
          resolve({'alreadyExists': true});
        }
      },
      (err) => {
        resolve({'alreadyExists': true})
      });
    });
  }
}
