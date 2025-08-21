import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {CarouselModule} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-hero-carrousel',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CarouselModule
  ],
  templateUrl: './hero-carrousel.component.html',
  styleUrl: './hero-carrousel.component.scss'
})
export class HeroCarrouselComponent {
clothes = 'VÊTEMENTS POUR FEMMES'
}
