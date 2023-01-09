import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class SearchService {
  valueChangesSubject = new BehaviorSubject<string | undefined>(undefined);
  valueChanges$ = this.valueChangesSubject.asObservable();

  submitSubject = new Subject<string>();
  submit$ = this.submitSubject.asObservable();

  isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();
}
