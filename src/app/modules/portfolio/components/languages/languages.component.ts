import { Component, signal } from '@angular/core';
import { ILanguages } from '../../interface/ILanguages';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})
export class LanguagesComponent {

  public arrayLanguages = signal<ILanguages[]>([
    {
      src: 'assets/icons/languages/br.svg',
      name: 'PORTUGUÊS',
      alt: 'Ícone de idioma em português-br'
    },
    {
      src: 'assets/icons/languages/us-uk.svg',
      name: 'INGLÊS',
      alt: 'Ícone de idioma em inglês-us'
    }
  ]);
}
