import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewLeadComponent } from './add-new-lead/add-new-lead.component';
import { AllLeadsComponent } from './all-leads/all-leads.component';
import { EditLeadAagComponent } from './edit-lead-aag/edit-lead-aag.component';

const routes: Routes = [
  {
    path: "all-leads",
    component: AllLeadsComponent
  },
  {
    path: "add-new-list",
    component: AddNewLeadComponent
  },
  {
    path: "edit-lead-aag",
    component: EditLeadAagComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
