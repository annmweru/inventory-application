import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup,ReactiveFormsModule, Validators} from "@angular/forms";
import Select from "../../models/select";
import {FlowService} from "../../service/flow/flow.service";
import Product from "../../models/product";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  form: FormGroup
  submitted = false
  categories : Select[] = [
      {value: "monitor", viewValue: "Monitor"},
      {value: "cpu", viewValue: "CPU"},
      {value: "laptop", viewValue: "Laptop"},
      {value: "ups", viewValue: "UPS"},
      {value: "keyboard", viewValue: "Keyboard"},
      {value: "mouse", viewValue: "Mouse"},
  ]

  tags: String[] = [
   'HP', 'SAMSUNG', 'APPLE',
   'COMPUTER', 'ACCESSORY' , 'DELL', 'LENOVO', 'ACCESSORY'
  ]

  // name, description, newOrRefurbRadio, item(Monitor, CPU, UPS, Laptop, Keyboard, Mouse) datebought, multichekboxes for tags
  constructor(
    private formBuilder: FormBuilder,
    private flowService: FlowService,
    private router: Router
  ) {
    this.form = formBuilder.group({
      itemName: ['', Validators.required],
      itemDescription: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(200)]],
      newOrRefurb: ['',Validators.required],
      itemCategory: ['', !Validators.pattern(/^Choose$/g)],
      dateBought: ['', Validators.required],
      itemTags: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  

  onSubmit() {
    this.submitted = true

    let product: Product = {
      id: 0,
       itemName: this.form.controls["itemName"].value,
      itemDescription: this.form.controls["itemDescription"].value,
      itemState: this.form.controls["newOrRefurb"].value,
      itemCategory: this.form.controls["itemCategory"].value,
      itemDate: this.form.controls["dateBought"].value,
      itemTag: this.form.controls["itemTags"].value,
      itemImg: "",
    }

    this.flowService.postProduct(product as Product).subscribe(data=>{
      this.router.navigate(["/"])
    },err=>{
      alert("something is wrong")
    })
  }
}
