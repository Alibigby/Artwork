import { Injectable } from '@angular/core';
import { Data } from './data.model'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Data[] = [
    {title: 'Title',description: 'Description', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/img/thumb-1920-556869.jpg'},
    {title: 'Title',description: 'Description', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/img/thumb-1920-556869.jpg'},
    {title: 'Title',description: 'Description', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/img/thumb-1920-556869.jpg'},
    {title: 'Title',description: 'Description', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/img/thumb-1920-556869.jpg'},
    {title: 'Title',description: 'Description', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/img/thumb-1920-556869.jpg'},
    {title: 'Title',description: 'Description', subtitle: 'Subtitle', content: 'Content here', url: '../../../assets/img/thumb-1920-556869.jpg'},
];

  getData() {
    return this.data;
  }

  constructor() { }
}
