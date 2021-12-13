import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FlowService} from "../../service/flow/flow.service";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: {} = {}
  constructor(
    private activatedRoute: ActivatedRoute,
    private flowService: FlowService
  ) { }

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));

    this.flowService.getProduct(productIdFromRoute).subscribe(value => {
      this.product = value
      console.log(this.product)
    }, error => {

    })
  }

  generatePDF() {
    let docDefinition = {
      header: this.product["item-name"],
      content: "Item ID: " + this.product["id"] + "\n" +
        "Item Name: " + this.product["item-name"] + "\n" +
        "Item Description: " + this.product["item-description"] + "\n" +
        "Item Date: " + this.product["item-date"] + "\n"
    }

    pdfMake.createPdf(docDefinition).print()

  }

}
