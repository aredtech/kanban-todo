import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResolutionChangeService {
  private _resolutionIsMobile = new BehaviorSubject<boolean>(false);
  constructor() {}

  public resolutionIsMobileObserve(): Observable<boolean> {
    return this._resolutionIsMobile.asObservable();
  }

  public resolutionChange(isMobile: boolean) {
    this._resolutionIsMobile.next(isMobile);
  }
}
