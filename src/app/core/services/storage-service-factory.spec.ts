import { StorageServiceFactory } from './storage-service-factory';

describe('StorageServiceFactory', () => {
  it('should create an instance', () => {
    expect(new StorageServiceFactory()).toBeTruthy();
  });
});
