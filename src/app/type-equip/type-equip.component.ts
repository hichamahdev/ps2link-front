
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Equipement } from '../equipement';
import { EquipementService } from '../equipement.service';

@Component({
  selector: 'app-type-equip',
  templateUrl: './type-equip.component.html',
  styleUrls: ['./type-equip.component.css']
})
export class TypeEquipComponent implements OnInit {

  equipements: Equipement[];

  constructor(private equipementService:EquipementService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.getEquipements();
  }

 private getEquipements() {
   this.equipementService.getEquipementList().subscribe(data => {
     this.equipements = data;
     
   }

   )
 }

  updateEquipement(id: number){
    this.router.navigate(['/updateequip', id]) ;
 }

 ConfigurerSlot(id: number){
  this.router.navigate(['/configuslot', id]) ;
 }

 deleteEquipement(id:number){
   this.equipementService.deleteEquipement(id).subscribe(data => {
     console.log(data);
     this.getEquipements();
   })

 }

 afficherDetails(id:number){
  this.router.navigate(['/detailequip', id]) ;
 }

 ajouterCarte(id:number){
 
  this.router.navigate(['/ajoutercarte', id]) ;
 }

}
