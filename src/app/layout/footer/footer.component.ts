import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  footerH5:string='© 2025 par À LA MODE. Créé par Junior Chimène'
  logoTitle: string = 'À LA MODE'

  menuItems= [
    'Boutique',
    'À propos',
    'Journal',
    'Contact'
  ]

  menuItems1= [
    'Livraison et retours',
    'Politique de boutique',
    'Paiements',
    'Politique de cookies',
    'Mentions légales'
  ]

  menuItems2= [
    'info@mondomaine.com',
    '47 rue des Couronnes ',
    '75020 Paris, France ',
    'Tél : 01 23 45 67 89 ',

  ]

  followUS = "Abonnez-vous.Restez à la mode"

  enterEMail = "Saissez votre e-mail ici*"

  followNow = `S'abonner maintenant `
}
