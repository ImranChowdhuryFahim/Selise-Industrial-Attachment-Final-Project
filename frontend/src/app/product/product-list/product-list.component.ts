import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { dataTable } from 'src/app/models/data-table';
import { dataConfig } from 'src/app/models/dataConfig';
import { Product } from 'src/app/models/product';
import { Response } from 'src/app/models/response';
import { BackendService } from 'src/app/service/backend.service';

export interface tableColumn{
  display:string;
  value:string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent implements OnInit {

  displayColumns: tableColumn[] = [
  {display:'Product Name',value:'productName'},
  {display:'Category',value:'category'},
  {display:'Price',value:'price'},
  {display:'Quantity',value:'quantity'},
  {display:'Origin',value:'origin'},
  {display:'Edit',value:'edit'},
  {display:'Delete',value:'delete'},
]
  displayedColumns: string[] = ['productName', 'category', 'price', 'quantity','origin','edit', 'delete'];
  pageSizeOptions: number[] = [2,5,10, 25, 100]
  isLoadingResults: boolean = false;

  tablePayload: dataTable = {
    isLoading: false,
    dataSources: [],
    displayedColumns: this.displayedColumns,
    displayedCOlumnsSettings: this.displayColumns,
    pageSizeOptions: [2,5,10, 25, 100],
  }

  dataConfig: dataConfig = { key:'price',order:'asc',perPage:5,page:0}

  constructor(private backendService:BackendService) { 
    
    this.getTransformedData(this.dataConfig)


  }

  ngOnInit(): void {
  }

  getTransformedData(dataConfig:dataConfig)
  {
    this.tablePayload.isLoading = true;
    this.backendService.loadTransformedProducts(dataConfig).then((res:Response)=>{
      if(res.isSuccessful)
      {
        console.log(res)
        this.dataConfig.totalLength = res.totalLength
        this.tablePayload.isLoading = false;
        this.tablePayload.dataSources = res.products as Product[];
        
      }
    })
  }

  onTableChange(newConfig:dataConfig)
  {
    this.getTransformedData(newConfig)
  }

}
