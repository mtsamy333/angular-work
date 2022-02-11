import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllLeadsComponent } from './all-leads/all-leads.component';
import { AddNewLeadComponent } from './add-new-lead/add-new-lead.component';
import { EditLeadAagComponent } from './edit-lead-aag/edit-lead-aag.component';

@NgModule({
  declarations: [
    AppComponent,
    AllLeadsComponent,
    AddNewLeadComponent,
    EditLeadAagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
