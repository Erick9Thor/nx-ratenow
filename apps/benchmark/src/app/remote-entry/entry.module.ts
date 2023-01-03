import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RemoteEntryComponent } from './entry.component';
import { remoteRoutes } from './entry.routes';
import { FormsModule } from '@angular/forms';
import {SharedFeatureTableModule} from "@nx-ratenow/shared/feature-table";

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(remoteRoutes), SharedFeatureTableModule],
  declarations: [RemoteEntryComponent],
  providers: [],
})
export class RemoteEntryModule {}
