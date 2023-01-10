import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoteEntryComponent } from './entry.component';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [TranslateModule, CommonModule, AppRoutingModule],
  declarations: [RemoteEntryComponent],
  exports: [TranslateModule, RouterModule]
})
export class RemoteEntryModule {}
