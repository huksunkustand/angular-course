import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['superman', 'chapulin', 'spiderman', 'kakaroto', 'vegeta']
  heroeBorrado : string =''

  borrarHeroe(heroe:string) {
    console.log("borrando ...");
    let heroeBorrado = this.heroes.filter(x => x === heroe);
    this.heroeBorrado = heroeBorrado[0] || "";
    let filter = this.heroes.filter(x => x != heroe);
    this.heroes = filter;
    
  }

}
