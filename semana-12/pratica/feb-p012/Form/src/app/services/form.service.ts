import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private formDataSubject = new BehaviorSubject<{ data: any, status: string }>({ data: null, status: '' });

  constructor() { }

  setFormData(formData: FormGroup) {
    formData.valueChanges.pipe(
      tap(data => this.formDataSubject.next({ data, status: formData.status })),
    ).subscribe();

    formData.statusChanges.pipe(
      map(status => ({ data: formData.value, status })),
      tap(dataStatus => this.formDataSubject.next(dataStatus))
    ).subscribe();
  }

  getFormData() {
    return this.formDataSubject.asObservable();
  }
}
