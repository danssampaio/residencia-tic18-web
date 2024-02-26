import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../services/form.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})

export class FormsComponent {
  form: FormGroup;
  profissoes: string[] = ['Desenvolvedor', 'Analista', 'DevOps', 'Gerente de Projetos', 'Design', 'Engenheiro de Software'];
  dadosEnviados: any;

  constructor(private formularioService: FormService) {
    this.form = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.maxLength(12)]),
      senha: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nome: new FormControl('', [Validators.required, Validators.pattern(/^(\w+\s+\w+)$/)]),
      telefone: new FormControl('', [Validators.required, Validators.pattern(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/)]),
      endereco: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/([\w\W]+)\s(\d+)/)]),
      nascimento: new FormControl('', [Validators.required, this.dataNascimentoValidator]),
      genero: new FormControl('', [Validators.required]),
      profissao: new FormControl('', [Validators.required]),

    });

    this.formularioService.setFormData(this.form);

    this.formularioService.getFormData().subscribe((data) => {
      console.log(data.status);
      console.log(data);
    });
    
  }

  dataNascimentoValidator() {
    return (control: FormControl) => {
      if (control.value === null)
        return null;

      const dataNascimento = new Date(control.value);
      const idade = new Date().getFullYear() - dataNascimento.getFullYear();

      if (idade < 18)
        return { 'menor': true };
      return null;
    };
  }

  onSubmit() {
    if (this.form.invalid) {
      console.log("Formulário Inválido.\n")
      return;
    }

    const { usuario, senha, email, nomeCompleto, telefone, endereco, nascimento, genero, profissao } = this.form.value;

    const dados = {
      usuario,
      senha,
      email,
      nomeCompleto,
      telefone,
      endereco,
      nascimento,
      genero,
      profissao
    };


    this.dadosEnviados = this.form.value;

  }
}