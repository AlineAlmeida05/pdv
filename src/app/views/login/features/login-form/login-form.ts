import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Alert } from '../../../../base-components/alert/alert';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [
    FormsModule, 
    Alert
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.scss',
})
export class LoginForm {
  

  email = '';
  senha = '';

  novaSenha = '';
  confirmarSenha = '';

  mensagem = '';
  tipoMensagem: 'sucesso' | 'erro' | 'aviso' | 'info' = 'info';
  telaAtual = 'login';



  entrar() {

    if (!this.email || !this.senha) {
      this.mensagem = 'Informe e-mail e senha.';
      this.tipoMensagem = 'aviso';

      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      const usuario = {
        email: this.email,
        senha: this.senha,
      };

      localStorage.setItem(
        'usuario',
        JSON.stringify(usuario)
      );

      this.mensagem = 'Conta criada com sucesso!';
      this.tipoMensagem = 'sucesso';

      return;
    }
    const usuario = JSON.parse(usuarioSalvo);

    if (
      usuario.email === this.email &&
      usuario.senha === this.senha
    ) {
      
      window.location.href = '/dashboard';
    }
    else {
      this.mensagem = 'E-mail ou senha inválidos!';
      this.tipoMensagem = 'erro';
    }
  }

  abrirRecuperacao() {

    this.mensagem = '';
    this.telaAtual = 'recuperacao';

    console.log(this.telaAtual);
  }

  voltarLogin() {
    this.mensagem = '';
    this.telaAtual = 'login';
  }

  continuarRecuperacao() {

    if (!this.email) {
      this.mensagem =
        'Informe o e-mail cadastrado.';

      this.tipoMensagem = 'aviso';

      return;
    }
    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      this.mensagem = 'Nenhum usuário cadastrado.';
      this.tipoMensagem = 'erro';
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (usuario.email === this.email) {
      this.telaAtual = 'nova-senha';
      this.mensagem = '';
    } else {
      this.mensagem = 'E-mail não encontrado.';
      this.tipoMensagem = 'erro';
    }
  }

  salvarNovaSenha() {

    if (!this.novaSenha || !this.confirmarSenha) {
      this.mensagem =
        'Preencha todos os campos.';

      this.tipoMensagem = 'aviso';

      return;
    }

    if (this.novaSenha !== this.confirmarSenha) {
      this.mensagem = 'As senhas não coincidem.';
      this.tipoMensagem = 'erro';
      return;
    }

    const usuarioSalvo = localStorage.getItem('usuario');

    if (!usuarioSalvo) {
      this.mensagem = 'Usuário não encontrado.';
      this.tipoMensagem = 'erro';
      return;
    }

    const usuario = JSON.parse(usuarioSalvo);

    if (this.novaSenha.length < 8) {
      this.mensagem =
        'A senha deve possuir pelo menos 8 caracteres.';

      this.tipoMensagem = 'erro';

      return;
    }

    if (usuario.senha === this.novaSenha) {
      this.mensagem =
        'A nova senha deve ser diferente da senha atual.';

      this.tipoMensagem = 'erro';

      return;
    }

    usuario.senha = this.novaSenha;

    localStorage.setItem(
      'usuario',
      JSON.stringify(usuario)
    );

    this.mensagem = 'Senha alterada com sucesso!';
    this.tipoMensagem = 'sucesso';

    this.novaSenha = '';
    this.confirmarSenha = '';

    this.email = '';
    this.senha = '';

    this.telaAtual = 'login';
  }

  
}
