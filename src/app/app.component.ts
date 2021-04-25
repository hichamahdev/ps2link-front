import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  roles: string[];
  authority: string;

  constructor(private tokenStorage: TokenStorageService) { }
  ngOnInit(): void {
    
  }
  title = 'third-test';
}
