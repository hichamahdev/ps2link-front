import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from '../client.service';
import { Clientt } from '../clientt';

@Component({
  selector: 'app-type-client',
  templateUrl: './type-client.component.html',
  styleUrls: ['./type-client.component.css']
})
export class TypeClientComponent implements OnInit {
  client: Clientt[];


  constructor(private clientservice: ClientService,private router:Router) { }

  ngOnInit(): void {
    this.getClient();

  }
  private getClient() {
    this.clientservice.getClientList().subscribe(data => {
            this.client = data;
            
            
      console.log(this.client);
      
    }
 
    )
  }

  deleteClient(id: number){

    this.clientservice.deleteClient(id).subscribe(data => {
      console.log(data);
      this.getClient();
    })
 
  }

  ajouterService(id:number){
    this.router.navigate(['/ajouterservice', id]) ;
  }

}
