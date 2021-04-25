import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Port } from '../port';
import { ServicePortService } from '../service-port.service';

@Component({
  selector: 'app-update-port',
  templateUrl: './update-port.component.html',
  styleUrls: ['./update-port.component.css']
})
export class UpdatePortComponent implements OnInit {

  id:number;
  port:Port = new Port();

  constructor(private servicePort:ServicePortService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.servicePort.getPortById(this.id).subscribe(data => {
      this.port = data;
    },
    error => console.log(error));
   
  }

  updatePort(){
    this.servicePort.updatePort(this.id, this.port).subscribe(data => {
        this.goToPortList();
    },
    error => console.error());

  }

  goToPortList(){
    this.router.navigate(['/detailecarte',this.port.carteid]);
}

}
