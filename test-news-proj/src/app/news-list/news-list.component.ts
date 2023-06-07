import {Component, Input} from '@angular/core';
import moment from 'moment';
import {Router} from "@angular/router";
import {NewsItem} from "../services/news.service";

@Component({
  selector: 'news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss'],
})
export class NewsListComponent {
  @Input() dataSource: NewsItem[] = [];

  constructor(private router: Router) {
  }

  public formatDate(originalDate: string | undefined): string {
    const formattedDate = moment(originalDate).format('D MMMM YYYY, HH:mm');
    return formattedDate;
  }

  public onToggle(newsRecord: any): void {
    newsRecord.expanded = !newsRecord.expanded;
    console.log(this.dataSource);
  }

  public onPageChange(id: number): void {
    this.router.navigateByUrl(`/${'news'}/${id + 1}`);
  }

}
