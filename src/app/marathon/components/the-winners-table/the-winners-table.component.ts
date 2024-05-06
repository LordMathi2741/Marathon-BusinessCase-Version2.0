import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {BaseService} from "../../../shared/service/base.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {Center} from "../../model/center.entity";

@Component({
  selector: 'the-winners-table',
  standalone: true,
  imports: [MatTableModule, MatPaginator, MatFormField, MatInput, FormsModule],
  templateUrl: './the-winners-table.component.html',
  styleUrl: './the-winners-table.component.css'
})
export class TheWinnersTableComponent implements OnInit {
  participantsByCenter: any[] = [];
  bestParticipantByCenter: any
  bestParticipantsByCenter: any[] = [];
  centerData: any;
  centers: any[] = [];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'marathonCenterName', 'ranking', 'recordTime'];
  searchedName: any;
   constructor(private marathonService: BaseService<any>) {
     marathonService.resourceEndPoint = "/centers"
   }
  ngOnInit(): void {
     this.getCenters().then(response =>  this.getBestParticipantsByCenter());
    this.dataSource.sort = this.sort;
  }

  async getCenters(){
    return new Promise((resolve, reject) => {
      this.marathonService.getCenters().subscribe((centers: any) => {
        centers.forEach((center: any) => {
          this.centerData = new Center(center.id, center.name)
          this.centers.push(this.centerData);
        });
        resolve(true);
      }, error => {
        reject(error);
      });
    });
  }

  getBestParticipantsByCenter(){
    this.centers.forEach((center: any) => {
      this.marathonService.getParticipantsByCenter(center.id).subscribe((participants: any) => {
        this.participantsByCenter = participants;
        this.bestParticipantByCenter = this.participantsByCenter.sort((a: any, b: any) => a.recordTime - b.recordTime).slice(0, 1);
        this.bestParticipantsByCenter.push(this.bestParticipantByCenter[0]);
        this.dataSource = new MatTableDataSource(this.bestParticipantsByCenter);
        this.dataSource.paginator = this.paginator;
      });
    });
  }

  applyFilter() {
      let centerFiltered = this.centers.filter((center: any) => center.marathonCenterName.toLowerCase().includes(this.searchedName.toLowerCase()) );
       let participantFiltered = this.bestParticipantsByCenter.filter((participant: any) => participant.centerId === centerFiltered[0].id);
       if(participantFiltered.length > 0){
         this.dataSource = new MatTableDataSource(participantFiltered);
       }
       else{
          this.dataSource = new MatTableDataSource(this.bestParticipantsByCenter);
       }
    this.dataSource.paginator = this.paginator;
  }
}
