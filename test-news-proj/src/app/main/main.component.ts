import {Component} from '@angular/core';
import moment from "moment";
import {NewsItem, NewsService} from "../services/news.service";

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  newsData: NewsItem[] = [];

  constructor(private newsService: NewsService) {
    this.newsService.getDataPath().subscribe(data => {
      this.newsData = this.newsService.mapData(data);
    });
  }

  public addNews(newsInfo): void {
    const localTime = moment().format('D MMMM YYYY, HH:mm');
    this.newsData.unshift(
      {
        "title": newsInfo.titleControl,
        "description": newsInfo.descriptionControl,
        "date": localTime,
        "tags": newsInfo.tagControl,
        "image": "/assets/default-img.jpg"
      });
  }
}
