import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsRecordComponent} from "./news-record/news-record.component";
import {MainComponent} from "./main/main.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'news/:id', component: NewsRecordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
