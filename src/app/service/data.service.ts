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
        title: 'The Last of us',
        description: '',
        content: 'One piece of paint from Tlou :(',
        url: '../../../assets/img/3e60e4f263e8c1e94cecf9de213c0a24.jpg',
      },
      {
        ID: 1,
        title: 'Young Boy',
        description: '',
        content: 'Say Hello to my lates avatar',
        url: '../../assets/img/gj3o6fveixx61.png'
      },
      {
        ID: 5,
        title: 'Agnoy',
        description: '',
        content: 'My Fan Art From agnoy',
        url: '../../../assets/img/vybanpa76kx61.png',
      },
      {
        ID: 2,
        title: 'Fire Watch',
        description: '',
        content: '950 Days, My sweet Firewatch',
        url: '../../../assets/img/1959305 (copy).jpg',
      },
      {
        ID: 3,
        title: 'Turtle City',
        description: '',
        content: 'took me 70 days to make this',
        url: '../../../assets/img/endleqmkahx61.jpg',
      },
      {
        ID: 4,
        title: 'No Title!',
        description: '',
        content: 'Grafitti',
        url: '../../../assets/img/1yjub8t03nx61.jpg',
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
