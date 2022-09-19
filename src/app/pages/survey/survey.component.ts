import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { Response } from 'src/app/model/response';
import { DataService } from 'src/app/shared/data.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TabserviceService } from 'src/app/shared/tabservice.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  
  public formDetails!: FormGroup;
  userList!: Response[];
  other: any;
  selectdIndex : number = 0;

  constructor(public fb: FormBuilder,private httpClient: HttpClient, private router: Router, public service: DataService, private _myTabService : TabserviceService) { 
    this.formDetails = this.fb.group({
      name: new FormControl('', [Validators.required]),
      radioValue: new FormControl('', [Validators.required]),
      programmingLanguage: [{ value: '',  disabled: true }, [Validators.required]],
    });

    this.formDetails.controls['radioValue'].valueChanges.subscribe(value => {
        if(value === 'other'){
          this.formDetails.get('programmingLanguage')?.enable();
        } else {
          this.formDetails.get('programmingLanguage')?.disable();
        }
    });
  }

  onSubmit(){
    this.service.addUserDetails(this.formDetails.value);
    alert("Thanks for your response");
    this.formDetails.reset();
  }

  ngOnInit(): void {
    this.service.getUserDetails().snapshotChanges().forEach(usersSnapshot => {
      this.userList = [];
      usersSnapshot.forEach(userSnapshot => {
        let user = userSnapshot.payload.toJSON();
        //user['$key'] = userSnapshot.key;
        this.userList.push(user as Response);
      });
    });

  }

}
