import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})
export class AccueilComponent {
  titre = 'L\'accueil du Z';

  compteur = 0;
  onClic() {
    alert("Bello Bito !");
  }

  increment(){
    this.compteur++;
  }
}
