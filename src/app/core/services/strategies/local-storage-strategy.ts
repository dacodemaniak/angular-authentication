import { IStorageStrategy } from "./i-storage-strategy";
import { environment } from "@environments/environment";

export class LocalStorageStrategy implements IStorageStrategy<string> {
    store(data: any): void {
        localStorage.setItem(`${environment.storage.keys.user}`, JSON.stringify(data))
    }
    remove(): void { 
        localStorage.removeItem(`${environment.storage.keys.user}`)
    }
    get(): string | null {
       return localStorage.getItem(`${environment.storage.keys.user}`)
    }
}
