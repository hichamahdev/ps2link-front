import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortEquip } from '../port-equip';
import { PortEquipService } from '../port-equip.service';

@Component({
  selector: 'app-type-port-equip',
  templateUrl: './type-port-equip.component.html',
  styleUrls: ['./type-port-equip.component.css']
})
export class TypePortEquipComponent implements OnInit {

  ports: PortEquip[];

  constructor(private servicePort:PortEquipService,
    private router:Router) { }

  ngOnInit(): void {
    this.getPorts();
  }
  private getPorts(){
    this.servicePort.getPortsEquipList().subscribe(data => {
      this.ports = data;
    });
  }

  updatePort(id:number){
    
    this.router.navigate(['/updateportequip', id]) ;

  }
  deletePort(id:number){
    this.servicePort.deletePortEquip(id).subscribe(data => {
      console.log(data);
      this.getPorts();
    })
  }

}
