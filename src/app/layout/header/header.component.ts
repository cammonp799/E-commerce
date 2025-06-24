import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {SearchComponent} from '../../icon/search/search.component';
import {UserComponent} from '../../icon/user/user.component';
import {CartComponent} from '../../icon/cart/cart.component';

@Component({
  selector: 'app-header',
    standalone: true,
  imports: [
    NgForOf, SearchComponent, UserComponent, CartComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
logoEcommerce = 'src/assets/e-commerce.png';

menuItems = [
  'BOUTIQUE',
  'À PROPOS',
  'JOURNAL',
  'CONTACT'
]

logoTitle: string = 'À LA MODE'
connexionLabel : string = 'Connexion';

}
