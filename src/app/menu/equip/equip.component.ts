import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Region } from 'src/app/region';
import { RegionService } from 'src/app/region.service';
import { Site } from 'src/app/site';
import { SiteService } from 'src/app/site.service';

@Component({
  selector: 'app-equip',
  templateUrl: './equip.component.html',
  styleUrls: ['./equip.component.css']
})
export class EquipComponent implements OnInit {

  regions: Region[];
  sites: Site[];

  constructor(private regionService: RegionService,
    private siteService: SiteService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.getRegion();
    this.getSite();
  }

  private getRegion() {
    this.regionService.getRegionList().subscribe(data => {
      this.regions = data;
      
    }
 
    )
  }

  private getSite() {
    this.siteService.getSiteList().subscribe(data => {
      this.sites = data;
      
    }
 
    )
  }

  detail(id: number){
    this.router.navigate(['/detailregion', id]) ;
  }
  detailSite(id:number){
    this.router.navigate(['/detailsite', id]) ;
  }

  ajouterSite(id:number){
    this.router.navigate(['/ajoutersite', id]) ;
  }

  deleteRegion(id:number){
    this.regionService.deleteRegion(id).subscribe(data => {
      console.log(data);
      this.getRegion();
    })
 
  }

  deleteSite(id:number){
    this.siteService.deleteSite(id).subscribe(data => {
      console.log(data);
      this.getSite();
    })
  }

  ajouterequip(id:number){
    this.router.navigate(['/ajouterequip', id]) ;

  }

}
