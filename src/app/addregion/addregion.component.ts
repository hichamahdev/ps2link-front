import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Region } from '../region';
import { RegionService } from '../region.service';

@Component({
  selector: 'app-addregion',
  templateUrl: './addregion.component.html',
  styleUrls: ['./addregion.component.css']
})
export class AddregionComponent implements OnInit {

  region: Region = new Region();


  constructor(private regionService: RegionService,private router:Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveRegion(){
    
    this.regionService.createRegion(this.region).subscribe(data => {
      console.log(data);
      
      
    },
    erroe => console.error());
    
  }

    goToRegionListe(){
     
      this.router.navigate(['/equi']);
    }
  
  createRegion(){
    this.saveRegion();
    this.goToRegionListe();
  }

}
