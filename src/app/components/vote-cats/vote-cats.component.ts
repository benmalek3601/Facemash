import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CatsService } from '../../services/cats/cats.service';

import { Cat } from '../../models/cats';


@Component({
  selector: 'app-vote-cats',
  standalone: true,
  imports: [],
  templateUrl: './vote-cats.component.html',
  styleUrl: './vote-cats.component.scss'
})
export class VoteCatsComponent {
  voteScore: number = 5;
  cats!: Cat[];
  firstCat: Cat = <Cat>{};
  secondCat: Cat = <Cat>{};


  constructor(private router: Router, readonly catsService: CatsService) {}

  ngOnInit(): void {
    this.catsService.getCats().subscribe({
      next: res => {
        this.cats = res;
        this.getRandomCats();
      }
    });
  }

  firstCatMash() {
    let data = {
      ...this.firstCat,
      score: <number>(this.firstCat.score) + 1
    };

    this.catsService.putCat(data, this.firstCat.id).subscribe({
      next: (res) => {
        this.getRandomCats();
      },
      error: (e) => alert('Error while updating the score !!'),
    });
  }

  secondCatMash() {
    let data = {
      ...this.secondCat,
      score: <number>(this.secondCat.score) + 1
    };

    this.catsService.putCat(data, this.secondCat.id).subscribe({
      next: (res) => {
        this.getRandomCats();
      },
      error: (e) => alert('Error while updating the score !!'),
    });
  }

  getRandomCats() {
    let firstCatIndex = this.getRandomIntInclusive();
    let secondCatIndex;

    do {
      secondCatIndex = this.getRandomIntInclusive();
    } while (firstCatIndex == secondCatIndex);

    this.firstCat = this.cats[firstCatIndex];
    this.secondCat = this.cats[secondCatIndex];
  }

  getRandomIntInclusive() {
    const min = Math.ceil(0);
    const max = Math.floor(99);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  goToHome() {
    this.router.navigateByUrl('/');
  }
}
