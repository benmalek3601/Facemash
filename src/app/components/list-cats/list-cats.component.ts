import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { CatsService } from '../../services/cats/cats.service';

import { Cat } from '../../models/cats';


@Component({
  selector: 'app-list-cats',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.scss'
})
export class ListCatsComponent {
  cats: Cat[] = [];

  constructor(private router: Router, readonly catsService: CatsService) {}

  ngOnInit(): void {
    this.catsService.getCats().subscribe({
      next: res => {
        this.cats = res;
        // console.log('iciii : ', res);
      }
    })
  }

  goToPageVote() {
    this.router.navigateByUrl('/vote');
  }

}
