import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { MinuteDurationPipe } from './pipes/minute-duration.pipe';
import { MinuteSecondsPipe } from './pipes/minute-seconds.pipe';
import { RelativeDateTimePipe } from './pipes/relative-date-time.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    EllipsisPipe,
    MinuteDurationPipe,
    MinuteSecondsPipe,
    RelativeDateTimePipe,
    SafeUrlPipe
  ],
  exports: [
    EllipsisPipe,
    MinuteDurationPipe,
    MinuteSecondsPipe,
    RelativeDateTimePipe,
    SafeUrlPipe
  ]
})
export class CorePipesModule {}
