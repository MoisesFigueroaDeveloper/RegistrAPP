import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usernameOrEmail: string= '';
  password: string= '';

  constructor(private router: Router) { }

  login(){

    const users = [
      {id: 1, username: 'usuario1', email:'usuario1@example.com', password: '123456'},
      {id: 2, username: 'usuario2', email:'usuario2@example.com', password: 'abcdef'}
    ];

    const user = users.find(u => u.username === this.usernameOrEmail || u.email === this.usernameOrEmail);

    if (user && user.password === this.password) {
      // Credenciales válidas, realizar inicio de sesión y navegar a la página principal
      this.router.navigate(['/home']);
    } else {
      // Credenciales incorrectas, mostrar un mensaje de error o tomar una acción adecuada
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
  
  ngOnInit() {
  }

}
