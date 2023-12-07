import { Component, Input } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { Cat } from '../../models/cats';

@Component({
  selector: 'app-card-cat',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './card-cat.component.html',
  styleUrl: './card-cat.component.scss'
})
export class CardCatComponent {
  @Input() cat!: Cat;

}
