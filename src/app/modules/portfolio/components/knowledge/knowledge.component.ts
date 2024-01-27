import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      name: 'HTML5',
      alt: "Ícone de conhecimento de html5"
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      name: 'CSS3',
      alt: "Ícone de conhecimento de css3"
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      name: 'JAVASCRIPT',
      alt: "Ícone de conhecimento de javascript"
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      name: 'ANGULAR',
      alt: "Ícone de conhecimento de Angular"
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      name: 'JAVA',
      alt: "Ícone de conhecimento de java"
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      name: 'SPRING',
      alt: "Ícone de conhecimento de spring"
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      name: 'SQL',
      alt: "Ícone de conhecimento de sql"
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      name: 'AWS',
      alt: "Ícone de conhecimento de aws"
    },
    {
      src: 'assets/icons/knowledge/tests.svg',
      name: 'TESTES',
      alt: "Ícone de conhecimento de testes"
    },
    {
      src: 'assets/icons/knowledge/azure.svg',
      name: 'AZURE',
      alt: "Ícone de conhecimento de azure"
    },
    {
      src: 'assets/icons/knowledge/scrum.svg',
      name: 'SCRUM',
      alt: 'Ícone de conhecimento de SCRUM'
    }
  ])

}
