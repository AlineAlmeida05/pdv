import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  imports: [],
  templateUrl: './alert.html',
  styleUrl: './alert.scss',
})

export class Alert {
  @Input() mensagem = '';

  @Input() tipo:
    | 'sucesso'
    | 'erro'
    | 'aviso'
    | 'info' = 'info';
}
