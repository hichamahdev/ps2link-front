import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';






const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatTabsModule,
  MatListModule

];



@NgModule({
  
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
