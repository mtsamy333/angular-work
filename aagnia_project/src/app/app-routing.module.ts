import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AddNewLeadComponent } from './add-new-lead/add-new-lead.component';
import { AllLeadsComponent } from './all-leads/all-leads.component';
import { ContactsComponent } from './contacts/contacts.component';
import { EditLeadAagComponent } from './edit-lead-aag/edit-lead-aag.component';
import { LeadsComponent } from './leads/leads.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {
    path: "leads",
    component: LeadsComponent
  },
  {
    path: "contacts",
    component: ContactsComponent
  },
  {
    path: "accounts",
    component: AccountsComponent
  },
  {
    path: "tasks",
    component: TasksComponent
  },
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
