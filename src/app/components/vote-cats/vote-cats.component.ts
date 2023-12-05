import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { ListCatsService } from '../../services/list-cats/list-cats.service';


@Component({
  selector: 'app-vote-cats',
  standalone: true,
  imports: [],
  templateUrl: './vote-cats.component.html',
  styleUrl: './vote-cats.component.scss'
})
export class VoteCatsComponent {
  voteScore: number = 5;
  firstCat: any = {};
  secondCat: any = {};

  constructor(private router: Router, readonly listCatsService: ListCatsService) {}

  ngOnInit(): void {
    this.listCatsService.getCats().subscribe({
      next: res => {
        this.firstCat = res.images[0];
        this.secondCat = res.images[1];
        // console.log('iciii : ', res);
      }
    });
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
