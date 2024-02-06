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
      strong: "Desenvolvedor Fullstack Java",
      p: "Mirante Tecnologia | 2021 - 2022"
    },
    text: `<p>Durante meu período na Mirante integrei o time de desenvolvimento em Java e atuei na sustentação dos sistemas de grandes clientes nacionais como Embrapa e PM-DF. Atuei com Java Spring, Angular e Metodologia Agile.</p>

    <p> Alinhamento, análise e execução de requisitos do sistema junto ao profissional UI/UX do time</p>

    <p>Frontend utilizando Angular para trafegar os dados do Backend para o front com padrão Rest Json.</p>

    <p>Utilização de Git para o controle de versões do código, usamos o GitFlow para melhorar as entregas como hotfix ou feature.</p>

    <p>Utilização de metodologias ágeis como Scrum/Agile com reuniões para alinhamento da equipe, e para as entregas diárias e semanais.</p>
    `
  }
])
}
