import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  person: any;
  constructor() {
    this.person = {
      birthDate: '',
      phone: ''
    };
  }

  ngOnInit() {
  }

  validateBirthDate() {
    const currentDate = new Date().getTime();
    const birth = new Date( this.person.birthDate).getTime();

    if (birth > currentDate) {
      alert('La fecha de nacimiento no es válida');
    } else {
      console.log('Fecha valida Current:' + currentDate + ' ' + birth);
    }
  }

  validatePhone() {
    console.log(this.person);
    if (this.person.phone.toString().length !== 10) {
      alert('La longitud del número de celular no es valida ' + this.person.phone.toString().length);
    }
  }

  registrar() {
    console.log(this.person.birth);
    this.validateBirthDate();
    this.validatePhone();
  }

}
