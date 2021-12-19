import { IStorageStrategy } from "./i-storage-strategy";
import { environment } from "@environments/environment";

export class SessionStorageStrategy implements IStorageStrategy<string> {
    store(data: any): void {
        sessionStorage.setItem(`${environment.storage.keys.user}`, JSON.stringify(data))
    }
    remove(): void { 
        sessionStorage.removeItem(`${environment.storage.keys.user}`)
    }
    get(): string | null {
       return sessionStorage.getItem(`${environment.storage.keys.user}`)
    }
}