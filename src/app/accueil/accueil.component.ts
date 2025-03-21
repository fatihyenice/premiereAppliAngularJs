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
      const enregistrement = localStorage.getItem("categories");

   
    const categoriesParDefaut: Categorie[] = [
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
    ];

    
    if(enregistrement == null){
      localStorage.setItem("categories", JSON.stringify(categoriesParDefaut))
    }

    this.categories = JSON.parse(localStorage.getItem("categories")!); // Le point d'exclamation à la fin veut dire ne cherche pas à typer, ce que je t'ai envoyé est sûr
  
}

    categories: Categorie[] = [];

    onClicAjouterImage() {
       this.categories[0].images.push(this.urlImageSaisie)
       this.urlImageSaisie = ""
    }
 
}
