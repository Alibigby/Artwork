import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public data$: BehaviorSubject<Data[]>;
  public favouriteData$: BehaviorSubject<Data[]>;

  constructor() {
    this.data$ = new BehaviorSubject<Data[]>([
      {
        ID: 0,
        title: 'Title1',
        description: 'Description',
        content: 'Content here',
        url: '../../../assets/img/thumb-1920-556869.jpg',
      },
      {
        ID: 1,
        title: 'Title2',
        description: 'Description',
        content: 'Content here',
        url: '../../../assets/img/thumb-1920-556869.jpg',
      },
      {
        ID: 2,
        title: 'Title3',
        description: 'Description',
        content: 'Content here',
        url: '../../../assets/img/thumb-1920-556869.jpg',
      },
      {
        ID: 3,
        title: 'Title4',
        description: 'Description',
        content: 'Content here',
        url: '../../../assets/img/thumb-1920-556869.jpg',
      },
      {
        ID: 4,
        title: 'Title5',
        description: 'Description',
        content: 'Content here',
        url: '../../../assets/img/thumb-1920-556869.jpg',
      },
      {
        ID: 5,
        title: 'Title6',
        description: 'Description',
        content: 'Content here',
        url: '../../../assets/img/thumb-1920-556869.jpg',
      },
    ]);
    this.favouriteData$ = new BehaviorSubject<Data[]>([]);
  }

  public set setData(value: Data[]) {
    this.data$.next(value);
  }
  public get getData(): Observable<Data[]> {
    return this.data$.asObservable();
  }
  public set setFavouriteData(value:any[]) {
    this.favouriteData$.next(value);
  }
  public get getFavouriteData(): Observable<Data[]> {
    return this.favouriteData$.asObservable();
  }
}
