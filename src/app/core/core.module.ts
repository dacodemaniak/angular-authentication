import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageServiceFactory } from './services/storage-service-factory';
import { UserNameValidator } from './validators/username-validator';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StorageServiceFactory,
    UserNameValidator
  ]
})
export class CoreModule { }
