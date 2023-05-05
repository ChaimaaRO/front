import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  formGroup: FormGroup | undefined;
  destination: string | undefined;
  dateDebut: string | undefined;
  dateFin: string | undefined;
  nombreVoyageurs: number | undefined;

  @Output() search = new EventEmitter<any>();

  onSubmit() {
    const filters = {
      destination: this.destination,
      dateDebut: this.dateDebut,
      dateFin: this.dateFin,
      nombreVoyageurs: this.nombreVoyageurs
    };
    this.search.emit(filters);
  }
  
}
