import { Component } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { CatsService } from '../../services/cats/cats.service';

import { Cat } from '../../models/cats';
import { Observable, map, of } from 'rxjs';
import { CardCatComponent } from '../card-cat/card-cat.component';


@Component({
  selector: 'app-list-cats',
  standalone: true,
  imports: [CommonModule, AsyncPipe, CardCatComponent],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.scss'
})
export class ListCatsComponent {
  cats$: Observable<Cat[]> = of([]);


  constructor(private router: Router, readonly catsService: CatsService) {}

  ngOnInit(): void {
    this.cats$ = this.catsService.getCats().pipe(
      map(items => items.sort(this.sortByScore))
    );
  }

  sortByScore(a: any, b: any) {
    if (a.score > b.score)
      return -1;
    if (a.score < b.score)
      return 1;
    return 0;
  }

  goToPageVote() {
    this.router.navigateByUrl('/vote');
  }

}
