import {
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {

  @Output()
  closeMenu = new EventEmitter<void>();

  fecharMenu() {
    this.closeMenu.emit();
  }

}
