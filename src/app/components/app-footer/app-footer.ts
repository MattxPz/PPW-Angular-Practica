import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css',
})
export class AppFooterComponent {

  nombre = 'Mateo Paez';
  fecha = new Date();
  precio = 1234.5;
  porcentaje = 0.85;
  mensaje = 'bienvenido a angular';
}