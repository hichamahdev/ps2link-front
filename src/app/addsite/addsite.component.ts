import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../site';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-addsite',
  templateUrl: './addsite.component.html',
  styleUrls: ['./addsite.component.css']
})
export class AddsiteComponent implements OnInit {

  site: Site = new Site();

  constructor(private siteService: SiteService,private router:Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  saveSite(){
    
    this.siteService.createSite(this.site).subscribe(data => {
      console.log(data);
      
      
    },
    erroe => console.error());
    
  }

    goToSiteListe(){
     
      this.router.navigate(['/equi']);
    }
  
  createSite(){
    this.saveSite();
    this.goToSiteListe();
  }

}
