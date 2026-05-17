import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonneService } from '../../services/personne.service';
import { Personne } from '../../models/personne';

@Component({
  selector: 'app-personne-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personne-list.html',
  styleUrl: './personne-list.scss'
})
export class PersonneList implements OnInit {

  personnes: Personne[] = [];

  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.personneService.getPersonnes().subscribe(data => {
      this.personnes = data;
    });
  }
}
