import {Component, OnInit} from '@angular/core';
import {BaseService} from "../../../shared/service/base.service";
import {Participant} from "../../../shared/model/participant.entity";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'winner-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent
  ],
  templateUrl: './winner-card.component.html',
  styleUrl: './winner-card.component.css'
})
export class WinnerCardComponent implements OnInit {
  winnerData:any;
  constructor(private baseService:BaseService<any> ) {
     baseService.resourceEndPoint = "/participants";
  }
  ngOnInit(): void {
      this.getWinner();
  }

  getWinner(){
      this.baseService.getWinner().subscribe((data:any)=>{
        this.winnerData = new Participant(data[0].id, data[0].firstName, data[0].lastName, data[0].photoUrl, data[0].centerId, data[0].ranking, data[0].recordTime);
        console.log(this.winnerData);
      });
  }

}
