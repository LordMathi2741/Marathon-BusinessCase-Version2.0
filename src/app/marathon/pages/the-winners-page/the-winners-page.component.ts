import { Component } from '@angular/core';
import {TheWinnersTableComponent} from "../../components/the-winners-table/the-winners-table.component";

@Component({
  selector: 'app-the-winners-page',
  standalone: true,
  imports: [
    TheWinnersTableComponent
  ],
  templateUrl: './the-winners-page.component.html',
  styleUrl: './the-winners-page.component.css'
})
export class TheWinnersPageComponent {

}
