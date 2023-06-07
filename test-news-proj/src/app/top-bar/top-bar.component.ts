import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  constructor(private router: Router) {
  }

  public onPageChange(): void {
    this.router.navigateByUrl('');
  }
}
