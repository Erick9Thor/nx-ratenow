import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Breadcrumb } from '../model/breadcrumb.model';

/**
 * Este service esta sacado de: https://www.npmjs.com/package/ng7-mat-breadcrumb
 */
@Injectable({
  providedIn: 'root'
})
export class Ng7MatBreadcrumbService {

  public breadcrumbLabels: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public newBreadcrumb: BehaviorSubject<Breadcrumb[]> = new BehaviorSubject<Breadcrumb[]>([]);

  updateBreadcrumbLabels(labels: any) {
    this.breadcrumbLabels.next(labels);
  }

  updateBreadcrumb(newBreadcrumb: Breadcrumb[]) {
    this.newBreadcrumb.next(newBreadcrumb);
  }

}
