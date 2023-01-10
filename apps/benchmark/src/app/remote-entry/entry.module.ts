import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteEntryComponent } from './entry.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [CommonModule, AppRoutingModule],
  providers: []
})
export class RemoteEntryModule {}
