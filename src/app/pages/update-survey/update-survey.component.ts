import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { CrudHttpService } from '../../crud/crud-http.service';
import {FormArray, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.component.html',
  styleUrls: ['./update-survey.component.css']
})

export class UpdateSurveyComponent{
  public mySurvey: any;
  survey = this.fb.group({
    surveyName: '',
    questions: this.fb.array([])
  });

  constructor(private route: ActivatedRoute, private http: HttpClient, private crudHttpService: CrudHttpService, private router: Router, private fb: FormBuilder) { 
    let API_URL = `http://localhost:3000/surveys/${route.snapshot.paramMap.get('id')}`;
    this.http.get(API_URL).toPromise().then(data => {
      this.mySurvey = data;

      this.survey = this.fb.group({
        surveyName: [this.mySurvey.surveyName],
        questions: this.fb.array(this.mySurvey.questions.map((r: any) => this.fb.group(r)))
      });
    })
    
  }

  get questions(){
    return this.survey.controls["questions"] as FormArray;
  }

  addQuestion(){
    const questionForm = this.fb.group({
      description: ['', Validators.required],
      questionType: ['',Validators.required],
      optionA: ['',Validators.required],
      optionB: ['',Validators.required],
      optionC: ['',Validators.required],
      optionD: ['',Validators.required]
    });

    this.questions.push(questionForm);
  }

  removeQuestion(questionIndex: number){
    this.questions.removeAt(questionIndex);
  }


}





