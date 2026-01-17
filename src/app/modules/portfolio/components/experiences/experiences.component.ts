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
  },
  {
    summary:{
      strong: "Desenvolvedor Java",
      p: "Mirante Tecnologia | 2024 - o momento"
    },
    text : `
    <p> Atuando na manutenção e evolução do sistema de gestão da empresa, para atender da melhor forma possível seus colaboradores. Realizo o monitoramento ativo das rotinas do sistema em produção e o atendimento de requisições dos usuários. Análise do negócio, alterações em fluxos de processos existentes, criação de novos processos e participação em reuniões com colaboradores e líderes das áreas da empresa para alinhamento de requisitos.</p>
    <p>Java 8, Apache Wicket, SQL</p>
    <p>Criei processos para automatizar tarefas, diminuir retrabalho e risco de erro humano nos processos da empresa.</p>
    <p>Realizo monitoramento ativo de rotinas em produção, identifico falhas e proponho soluções.</p>
    <p>Implemento alterações e melhorias no sistema que geram valor aos usuários.</p>
    <p>Realizo alinhamento de requisitos com o usuário e stakeholders via texto e chamadas de vídeo.</p>
    <p>Atendimento das necessidades dos usuários por meio da conclusão de chamados abertos no sistema.</p>
    `
  }
 ])
}
