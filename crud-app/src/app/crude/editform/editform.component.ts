import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { error } from 'console';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from '../../app.component';
@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrl: './editform.component.scss'
})
export class EditformComponent implements OnInit {
  studentform:FormGroup;
  constructor(private _fb:FormBuilder,private _service:ServicesService,
    private _dialogref:MatDialogRef<EditformComponent>
    ,@Inject(MAT_DIALOG_DATA)public data:any){
     
    this.studentform=this._fb.group(
      {
        firstname:[],
        lastname:'',
        dateofbirth:'',
        mobile:'',
        gender:'',
        address:'',
      }
    )
  }
  ngOnInit(){
        this.studentform.patchValue(this.data)
  }
  onSubmit(){
    if(this.studentform.valid){
    this._service.addEmployee(this.studentform.value).subscribe({
      next: (val:any)=>{
        alert("Student Added ");
        this._dialogref.close(true);
      },
      error:console.log
    })
      }
      else{
        this._service.addEmployee(this.studentform.value).subscribe({
          next:(val:any)=>{alert('Student Added')
        this._dialogref.close()},
          error:(err:any)=>{console.error(err);}
        })
      }
     
    }
  }


