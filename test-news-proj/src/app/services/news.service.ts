import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface NewsItem {
  ID?: string;
  title: string;
  description: string;
  date?: string;
  tags?: string;
  image?: string;
  expanded?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  filePath: string = 'assets/news.json';
  newsData: NewsItem[] = [];

  constructor(private http: HttpClient) {
    this.getDataPath().subscribe(data => {
      this.newsData = this.mapData(data);
    });
  }

  getDataPath(): Observable<any> {
    return this.http.get<NewsItem[]>(this.filePath);
  }

  mapData(data: Array<any>): NewsItem[] {
    return data.map(item => {
      return {
        ID: item.ID,
        title: item.title,
        description: item.description,
        date: item.date,
        tags: this.adaptTags(item.tags),
        image: item.image,
        expanded: item.expanded
      };
    });
  }

  private adaptTags(tags?: { title: string }[]): string {
    if (!tags) return '';
    return tags.map(tag => tag.title).join(', ');
  }
}
