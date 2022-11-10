import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Route, Router } from '@angular/router';
import { dataTable } from '../models/data-table';
import { Product } from '../models/product';
import { Response } from '../models/response';
import { BackendService } from '../service/backend.service';
import { InternalService } from '../service/internal.service';




/**
 * @title Table retrieving data through HTTP
 */
 @Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() dataTablePayload!: dataTable;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  isLoading:boolean = false;

  constructor(private route: Router,private backendService:BackendService,private internalService:InternalService) {}

  ngOnInit(): void {

      
  }


  getPaginatorData(data:any)
  {
    console.log(data)
    this.dataTablePayload.isLoading = true
  }

  getMatSortData(data: any)
  {
    console.log(data)
  }


  deleteData(data:Product)
  {
    this.dataTablePayload.isLoading = true;
    this.backendService.deleteProduct(data).subscribe((res:Response)=>{
      if(res.isSuccessful)
      {
        this.backendService.loadTransformedProducts().then((res:Response)=>{
          if(res.isSuccessful)
          {
            this.dataTablePayload.isLoading = false;
            this.dataTablePayload.dataSources = res.products as Product[];

            this.internalService.openSnackBar('successfully deleted',2,'blue-snackbar')
          }
        })
      }
    })
    
  }


}



