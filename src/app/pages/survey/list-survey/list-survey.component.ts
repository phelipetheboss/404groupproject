import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudHttpService } from '../../../crud/crud-http.service';


@Component({
  selector: 'app-list-survey',
  templateUrl: './list-survey.component.html',
  styleUrls: ['./list-survey.component.css']
})
export class ListSurveyComponent implements OnInit {
  surveyList:any = [];

  constructor(private crudHttpService: CrudHttpService) { }

  ngOnInit(): void {
    this.listSurveys();
  }

  listSurveys(){
    this.crudHttpService.list().subscribe((response)=>{
      this.surveyList = response;
    },(error=>{

    }));
  }

  deleteSurvey(id: any){
    this.crudHttpService.delete(id).subscribe((response)=>{
      this.listSurveys();
    },(error=>{
    }));
  }

}
