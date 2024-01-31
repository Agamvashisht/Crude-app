import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditformComponent } from './crude/editform/editform.component';
import { ServicesService } from './services/services.service';
import { OnInit } from '@angular/core';
import { NgModule } from '@angular/core';import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { nextTick } from 'process';
import { subscribe } from 'diagnostics_channel';
import { error } from 'console';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  title = 'crud-app';
  displayedColumns: string[] = [ 'id', 'firstname','lastname', 'dateofbirth','mobile','gender', 'address','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog:MatDialog,private _service:ServicesService){}
  ngOnInit():void{
    this.getStudentlist();
      }
     
  
  openEditForm(){
   const dialogref= this._dialog.open(EditformComponent)
    dialogref.afterClosed().subscribe({
      next:(val)=> {
        if(val){
this.getStudentlist();
        }else{
          this.getStudentlist();
        }
      },
    })
  }
  getStudentlist(){
    this._service.getStudentlist().subscribe({
      next:(res)=>{this.dataSource=new MatTableDataSource(res)
        this.dataSource.sort=this.sort
        this.dataSource.paginator=this.paginator
    },
      error:console.log,}
    )
  }
  deleteStudent(id:any){
    return this._service.deleteStudent(id).subscribe({
      next:(res)=>{
      alert("Student Deleted ");
      this.getStudentlist();
      },
     error: console.log,
      
    });
    
  }
  onEditform(data:any){
    this._dialog.open(EditformComponent,{data,})
      }
}
