import {Component, OnInit, ViewChild} from '@angular/core';
import {FlowService} from "../service/flow/flow.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: [] = []

  columnNames: string[] = ['id','item-name', 'item-description',
      'item-state', 'item-category',
    'item-date'
  ]
  displayedColumns: string[] = this.columnNames

  dataSource = new MatTableDataSource<any>(this.products)
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private flowService: FlowService) { }
 ngOnInit(): void {
 this.dataSource.paginator = this.paginator
 console.log(this.paginator)
    this.flowService.getProducts().subscribe(
      data=>{
        this.products = data
        this.dataSource = new MatTableDataSource<any>(this.products)
        console.log(data)
      }, error => {
        alert(error.toString())
      }
    )
  }

}
