import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


type Categorie = {
  titre: string,
  images: string[];
} 

@Component({
  selector: 'app-accueil',
  imports: [FormsModule],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.scss'
})


export class AccueilComponent {

    urlImageSaisie = ''; 

    // Quand les composants seront chargés
    ngOnInit(){
      console.log('coucou')
    }
   
    categories: Categorie[] = [
      {
        titre: 'A',
        images: [],
      },
      {
        titre: 'B',
        images: [],
      },
      {
        titre: 'C',
        images: [],
      },
      {
        titre: 'D',
        images: [],
      },
      {
        titre: 'E',
        images: [],
      },
    ]

    onClicAjouterImage() {
       this.categories[0].images.push(this.urlImageSaisie)
       this.urlImageSaisie = ""
    }
}
