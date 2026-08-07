import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  @Output()
  menuClick = new EventEmitter<void>();

  abrirMenu() {
    this.menuClick.emit();
  }

  logout() {
    const sair = confirm(
      'Tem certeza que deseja sair?'
    );

    if (!sair) {
      return;
    }

    window.location.href = '/';
  }

}
