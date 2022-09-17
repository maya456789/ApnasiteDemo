import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder, FormArray, Validators} from '@angular/forms'

@Component({
  selector: 'app-invoicepage',
  templateUrl: './invoicepage.component.html',
  styleUrls: ['./invoicepage.component.css']
})
export class InvoicepageComponent implements OnInit {

  invoiceFormData:FormGroup;
  addInvoice: FormArray ;

  constructor(private fbuild:FormBuilder) {
    this.addInvoice=this.fbuild.array([]);
    this.invoiceFormData=this.fbuild.group({
      personName:['',Validators.required],
      invoiceDate:['',Validators.required],
      invoiceNo:['',Validators.required],
      totalAmount:['',Validators.required],
      addInvoice:this.fbuild.array([this.ctrateInvoice()])

    })
   }

   

   get f() {
    return  this.invoiceFormData.get("addInvoice") as FormArray;
  }


   ctrateInvoice():FormGroup{

     return this.fbuild.group({
      itemNo:['',Validators.required],
      unitPrice:['',Validators.required],
      quantity:['',Validators.required],
      total:['',Validators.required]

     })
   }

  ngOnInit(): void {
  }

  addForm(){
    this.addInvoice = this.invoiceFormData.get("addInvoice") as FormArray;
    this.addInvoice.push(this.ctrateInvoice());
 }

 removeForm(index:any){
  (this.invoiceFormData.get("addInvoice") as FormArray).removeAt(index);
}
  

  onSubmit(formData:any){
    console.log("Invoice Data is :->",this.invoiceFormData);
    
  }

}
