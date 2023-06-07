import {Component} from '@angular/core';
import {NewsItem, NewsService} from "../services/news.service";

@Component({
  selector: 'slider-block',
  templateUrl: './slider-block.component.html',
  styleUrls: ['./slider-block.component.scss']
})
export class SliderBlockComponent {
  newsData: NewsItem[] = [];

  constructor(private newsService: NewsService) {
    this.newsService.getDataPath().subscribe(data => {
      this.newsData = this.newsService.mapData(data);
      this.newsData = this.newsData.slice(0, 3);
    });
  }
}
