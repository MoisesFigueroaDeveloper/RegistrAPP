import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  register() {
    // Aquí implementa la lógica para registrar al usuario en tu sistema
    // Puedes utilizar servicios, llamadas a la base de datos, etc.

    // Después de registrar al usuario, puedes redirigirlo a la página de inicio de sesión
    this.router.navigate(['/login']);
  }

  ngOnInit() {}
}
