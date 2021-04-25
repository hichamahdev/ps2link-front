import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte';
import { Port } from '../port';
import { CarteService } from '../carte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-carte',
  templateUrl: './type-carte.component.html',
  styleUrls: ['./type-carte.component.css']
})
export class TypeCarteComponent implements OnInit {

  carte: Carte[];
  
  

  constructor(private carteservice: CarteService,private router:Router
    ) { }

  ngOnInit(): void {
    this.getCartes();
  }

  private getCartes() {
    this.carteservice.getCarteList().subscribe(data => {
            this.carte = data;
            
            
      console.log(this.carte);
      
    }
 
    )
  }

  updateCarte(id:number){
    this.router.navigate(['/updatecartee', id]) ;
  }

  afficheCarte(id:number){
    this.router.navigate(['/detailecarte', id]) ;

  }



}
