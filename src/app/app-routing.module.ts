import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicepageComponent } from './invoicepage/invoicepage.component';

const routes: Routes = [
  {path:'invoicePage',component:InvoicepageComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
