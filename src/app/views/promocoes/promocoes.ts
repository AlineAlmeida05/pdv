import { Component } from '@angular/core';
import { MainLayout } from '../../layout/main-layout/main-layout';

@Component({
  selector: 'app-promocoes',
  standalone: true,
  imports: [MainLayout],
  templateUrl: './promocoes.html',
  styleUrl: './promocoes.scss',
})
export class Promocoes {}
