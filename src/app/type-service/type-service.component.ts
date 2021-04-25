import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicee } from '../servicee';
import { ServiceeService } from '../servicee.service';

@Component({
  selector: 'app-type-service',
  templateUrl: './type-service.component.html',
  styleUrls: ['./type-service.component.css']
})
export class TypeServiceComponent implements OnInit {
  service: Servicee[];

  constructor(private serviceeservice: ServiceeService,private router:Router) { }

  ngOnInit(): void {
    this.getService();
  }

  private getService() {
    this.serviceeservice.getServiceList().subscribe(data => {
            this.service = data;
            
            
      console.log(this.service);
      
    }
 
    )
  }

  deleteService(id: number){
    this.serviceeservice.deleteService(id).subscribe(data => {
      console.log(data);
      this.getService();
    })
  }

}
