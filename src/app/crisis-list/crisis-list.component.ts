import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './crisis-list.component.html',
  styleUrl: './crisis-list.component.scss'
})
export class CrisisListComponent {

}
