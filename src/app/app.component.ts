import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSearch(_filters: any) {
    // Effectuer une action en fonction des filtres de recherche
  }
}
