import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditformComponent } from './editform/editform.component';
import { TableComponent } from './table/table.component';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule}  from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    EditformComponent,
    TableComponent
  ],
  providers:[provideNativeDateAdapter()],
  imports: [
    CommonModule,MatToolbarModule,MatIconModule,MatButtonModule,MatDialogModule,FormsModule,MatFormFieldModule
   , MatInputModule,MatDatepickerModule,MatRadioModule,ReactiveFormsModule],
})
export class CrudeModule {}
