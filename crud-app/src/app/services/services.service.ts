import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _http:HttpClient)  { }
  addEmployee(data:any):Observable<any>{
    return this._http.post('http://localhost:3000/studentform',data)
  }
  getStudentlist():Observable<any>{
    return this._http.get('http://localhost:3000/studentform')
  }
  deleteStudent(id:any):Observable<any>{
    return this._http.delete(`http://localhost:3000/studentform/${id}`);
  }
  updateEmployee(id:any,data:any):Observable<any>{
    return this._http.put(`http://localhost:3000/studentform/${id}`,data)
  }
}
