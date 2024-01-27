import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/techunter1.png',
      alt: 'Projeto',
      title: 'TecHunter',
      width: '300px',
      height: '70px%',
      description: 'Portal de vagas específico para a área de T.I feito com Java e Spring Framework. API Rest com banco de dados PostgreSQL, Autenticação com JWT e Spring Security, testes unitários com Junit5.',
      links:[
        {
          name: 'Conheça o TecHunter',
          href: 'https://github.com/Prosantosgui/TecHunter'
        }
      ]
    }
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
