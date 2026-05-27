import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppHeader {

  readonly brand = signal("ppw-angular");
  readonly showInfo = signal(false);

  readonly toggleLabel = computed(
    () => (this.showInfo()
    ? 'Ocultar Info' 
    : 'Mostrar Info'));

  changeBrand(): void{
    //actualizar el valor de la senal brand
    this.brand.update((valor) => valor + '!');
  }

  resetBrand(): void{
    this.brand.set("ppw-angular");
  }

  toggleInfo() {
    this.showInfo.update((value) => !value);
  }

  
  private authService = inject(AuthService);
  private router = inject(Router);

  // El signal del servicio: null = no autenticado, User = autenticado.
  currentUser = this.authService.currentUser;

  logout() {
    this.authService.logout().subscribe(() => {
      // Redirige al login despues de cerrar sesion.
      this.router.navigate(['/login']);
    });
  }


}
