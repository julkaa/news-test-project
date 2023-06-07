import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {SliderBlockComponent} from './slider-block/slider-block.component';
import {HttpClientModule} from "@angular/common/http";
import {NewsListComponent} from './news-list/news-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {FormBlockComponent} from './form-block/form-block.component';
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NewsRecordComponent} from './news-record/news-record.component';
import {TopBarComponent} from './top-bar/top-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SliderBlockComponent,
    NewsListComponent,
    FormBlockComponent,
    NewsRecordComponent,
    TopBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
