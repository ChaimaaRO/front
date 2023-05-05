import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Dialog} from 'primeng/dialog';
import {ViewChild} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  badgeValue1: number = 1;
  badgeValue2: number = 2;
  badgeValue3: number = 3;

  getBadgeValue1(): string {
    return this.badgeValue1.toString();
  }
  getBadgeValue2(): string {
    return this.badgeValue2.toString();
  }
  getBadgeValue3(): string {
    return this.badgeValue3.toString();
  }

  constructor(public router: Router) {}

  ngOnInit(): void {

  }
  @ViewChild('myDialog') myDialog: Dialog;
  displayDialog = false;


  showDialog() {
     this.displayDialog = true;
  }

  onLocataireClick() {
     // Code à exécuter lorsqu'on clique sur le bouton "Locataire"
  }

  onProprietaireClick() {
     // Code à exécuter lorsqu'on clique sur le bouton "Propriétaire"
  }
  signup(){
    this.router.navigateByUrl('signup');
  }
}
