import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
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