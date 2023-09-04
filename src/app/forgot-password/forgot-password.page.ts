import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: string = '';

  constructor(private router: Router) {}

  sendPasswordResetEmail() {
    // Aquí implementa la lógica para enviar un correo de recuperación de contraseña
    // Puedes utilizar servicios, autenticación, etc.

    
    // Después de enviar el correo, puedes redirigir al usuario a una página de confirmación
    this.router.navigate(['/login']);
  }

  ngOnInit() {}
}

