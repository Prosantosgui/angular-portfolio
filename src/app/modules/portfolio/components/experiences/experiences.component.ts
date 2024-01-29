import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences';


@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
public arrayExperiences = signal<IExperiences[]>([
  {
    summary:{
      strong: "Estagiário Java",
      p: "Mirante Tecnologia | 2021 - 2022"
    },
    text: "<p>Durante meu período na Mirante integrei o time de desenvolvimento em Java e atuei na sustentação dos sistemas de grandes clientes nacionais como Embrapa e PM-DF. Atuei com Java Spring, Angular e Metodologia Agile.</p>"
  }
])
}
