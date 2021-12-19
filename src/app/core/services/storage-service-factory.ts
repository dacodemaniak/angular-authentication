import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { IStorageStrategy } from "./strategies/i-storage-strategy";
import { LocalStorageStrategy } from "./strategies/local-storage-strategy";
import { SessionStorageStrategy } from "./strategies/session-storage-strategy";

@Injectable()
export class StorageServiceFactory {
    public getInstance(): IStorageStrategy<string> {
        return environment.storage.strategy === 'session' ?
            new SessionStorageStrategy() :
            new LocalStorageStrategy()
    }
}
