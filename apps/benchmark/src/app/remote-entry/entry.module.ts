import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [AppRoutingModule, CommonModule, TranslateModule],
  exports: [TranslateModule, RouterModule]
})
export class RemoteEntryModule {}
