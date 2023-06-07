import {Component} from '@angular/core';
import {NewsItem, NewsService} from "../services/news.service";
import {ActivatedRoute} from "@angular/router";
import moment from "moment/moment";

@Component({
  selector: 'app-news-record',
  templateUrl: './news-record.component.html',
  styleUrls: ['./news-record.component.scss']
})
export class NewsRecordComponent {
  newsData: NewsItem[] = [];
  data: NewsItem;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {
    this.newsService.getDataPath().subscribe(data => {
      this.newsData = this.newsService.mapData(data);
      this.data = this.newsData[this.getId()];
    });
  }

  public formatDate(originalDate: string | undefined): string {
    const formattedDate = moment(originalDate).format('D MMMM YYYY, HH:mm');
    return formattedDate;
  }

  private getId(): number {
    return parseInt(<string>this.route.snapshot.paramMap.get('id'), 10) - 1;
  }
}
