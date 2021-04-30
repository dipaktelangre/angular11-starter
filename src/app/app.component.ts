import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserPostsService } from 'src/shared/services/user-posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'vendor test';
  cards$: Observable<any>;

  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private userService: UserPostsService
  ) {
    console.log('BASE_URL', baseUrl);
    this.cards$ = this.userService.getCards();
  }
  ngOnInit(): void {}
}
