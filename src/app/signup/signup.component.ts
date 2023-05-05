import { Component, ViewChild, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Dialog } from 'primeng/dialog';
interface City {
  name: string;
  code: string;
}
// interface Type {
//   name: string;
//   code: string;
// }

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  title = 'signup-Form';
  formGroup: FormGroup;
  formGroup2: FormGroup;
  // formGroup3: FormGroup;
  // types: Type[];
  cities: City[];
  userForm = this.fb.group({
    firstName:['',Validators.required],
    lastName :['',Validators.required],
    adresse :['',Validators.required]
    // adress: this.fb.group({
    //   street:[''],
    //   postCode:['']
    // })

  })


  constructor(private fb: FormBuilder, private router: Router) { };
  ngOnInit() {
    this.cities = [
      { name: 'Homme', code: 'H' },
      { name: 'Femme', code: 'F' }
    
  ];
  // this.types=[{ name: 'Locataire', code :'L'},
  //             { name: 'Proprietaire', code :'P'}];

  this.formGroup = new FormGroup({
      selectedCity: new FormControl<City | null>(null)
  });
   this.formGroup2 = new FormGroup({
    date: new FormControl<Date | null>(null)
});
// this.formGroup3 = new FormGroup({
//   selectedType: new FormControl<Type | null>(null)
// });
  }
  // onClick() {
  //   this.router.navigate(['/chemin-vers-le-composant']);
  // }
  addUser(){
    console.log(this.userForm.value);
  }
  onSubmit() {
    // console.log(this.userForm.value);
    // Enregistrer les données du formulaire
    // Naviguer vers un autre composant
    this.router.navigate(['choix']);
  }
  

  // ngOnInit() {
  //   this.myForm = this.formBuilder.group({
  //     nom: ['', Validators.required],
  //     prenom: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     genre: ['', Validators.required]
  //   });
  // }
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
  onContinue() {
    this.router.navigateByUrl('popup');
}
}
