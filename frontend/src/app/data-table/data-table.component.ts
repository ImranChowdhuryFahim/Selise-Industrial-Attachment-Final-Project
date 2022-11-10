import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Route, Router } from '@angular/router';
import { dataTable } from '../models/data-table';
import { dataConfig } from '../models/dataConfig';
import { Product } from '../models/product';
import { Response } from '../models/response';
import { BackendService } from '../service/backend.service';
import { InternalService } from '../service/internal.service';

export interface paginatorConfig{
  previousPageIndex?: number;
  pageIndex?: number;
  pageSize?: number;
  length?: number;
}

export interface sortConfig{
  active?: string;
  direction?: string;
}

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
  @Input() dataConfig!: dataConfig
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  @Output() tableChange:EventEmitter<dataConfig> = new EventEmitter<dataConfig>()

  isLoading:boolean = false;

  constructor(private route: Router,private backendService:BackendService,private internalService:InternalService) {}

  ngOnInit(): void {

      
  }


  getPaginatorData(paginatorData:paginatorConfig)
  {
    let newConfig:dataConfig = this.dataConfig
    newConfig.page = paginatorData.pageIndex as number; 
    newConfig.perPage = paginatorData.pageSize as number;

    this.tableChange.emit(newConfig);
  }

  getMatSortData(sortData: sortConfig)
  {
    let newConfig:dataConfig = this.dataConfig
    newConfig.key = sortData.active as string; 
    newConfig.order = sortData.direction as string;

    this.tableChange.emit(newConfig);
  }


  deleteData(data:Product)
  {
    this.dataTablePayload.isLoading = true;
    this.backendService.deleteProduct(data).subscribe((res:Response)=>{
      if(res.isSuccessful)
      {
        this.backendService.loadTransformedProducts(this.dataConfig).then((res:Response)=>{
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



