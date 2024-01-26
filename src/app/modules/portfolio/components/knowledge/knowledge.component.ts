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
      alt: "Ícone de conhecimento de html5"
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: "Ícone de conhecimento de css3"
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: "Ícone de conhecimento de javascript"
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: "Ícone de conhecimento de java"
    },
    {
      src: 'assets/icons/knowledge/spring.svg',
      alt: "Ícone de conhecimento de spring"
    },
    {
      src: 'assets/icons/knowledge/sql.svg',
      alt: "Ícone de conhecimento de sql"
    },
    {
      src: 'assets/icons/knowledge/aws.svg',
      alt: "Ícone de conhecimento de aws"
    },
    {
      src: 'assets/icons/knowledge/tests.svg',
      alt: "Ícone de conhecimento de testes"
    },
  ])

}
