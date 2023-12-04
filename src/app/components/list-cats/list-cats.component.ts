import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { ListCatsService } from '../../services/list-cats/list-cats.service';

@Component({
  selector: 'app-list-cats',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule],
  templateUrl: './list-cats.component.html',
  styleUrl: './list-cats.component.scss'
})
export class ListCatsComponent {
  images: [] = [];

  constructor(private router: Router, readonly listCatsService: ListCatsService) {}

  ngOnInit(): void {
    this.listCatsService.getCats().subscribe({
      next: res => {
        this.images = res.images;
        // console.log('iciii : ', res);
      }
    })
  }

  goToPageVote() {
    this.router.navigateByUrl('/vote');
  }

}
