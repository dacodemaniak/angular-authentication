import { Injectable } from '@angular/core';
import { StorageServiceFactory } from './storage-service-factory';
import { IStorageStrategy } from './strategies/i-storage-strategy';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private storageStrategy: IStorageStrategy<string>;

  constructor(
    storageServiceFactory: StorageServiceFactory
  ) { 
    this.storageStrategy = storageServiceFactory.getInstance();
  }

  public store(data: any): void {
    this.storageStrategy.store(data);
  }

  public remove(): void {
    this.storageStrategy.remove();
  }

  public get(): string | null {
    return this.storageStrategy.get();
  }
}
