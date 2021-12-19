import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageServiceFactory } from './services/storage-service-factory';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StorageServiceFactory
  ]
})
export class CoreModule { }
