import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BindingsDataService {
    private messageSource = new BehaviorSubject(null);
    currentMessage = this.messageSource.asObservable();

    constructor(private readonly http: HttpClient) { }

    updateDocument(bindings: string) {
        this.messageSource.next(bindings)
    }

    getDefaultBinds(): Observable<string> {
        return this.http.get(environment.defaultBindingsFile, { responseType: 'text' });
    }
}
