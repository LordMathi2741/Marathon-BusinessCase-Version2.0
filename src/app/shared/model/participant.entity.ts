export class Participant {
  id:any;
  firstName:any;
  lastName:any;
  photoUrl:any;
  centerId:any;
  ranking:any;
  recordTime:any;
  constructor(id:any, firstName:any, lastName:any, photoUrl:any, centerId:any, ranking:any, recordTime:any) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.photoUrl = photoUrl;
    this.centerId = centerId;
    this.ranking = ranking;
    this.recordTime = recordTime;
  }
}
