import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRecordComponent } from './news-record.component';

describe('NewsRecordComponent', () => {
  let component: NewsRecordComponent;
  let fixture: ComponentFixture<NewsRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsRecordComponent]
    });
    fixture = TestBed.createComponent(NewsRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
