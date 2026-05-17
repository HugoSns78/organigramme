import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonneList } from './components/personne-list/personne-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonneList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
