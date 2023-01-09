import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteDuration'
})
export class MinuteDurationPipe implements PipeTransform {
  transform(minutes: number): string {
    if (minutes === 0) {
      return '';
    }

    if (minutes >= 1440) {
      return (
        Math.floor(minutes / 24 / 60) +
        'd ' +
        Math.floor((minutes / 60) % 24) +
        'h ' +
        Math.floor(minutes % 60) +
        'min'
      );
    } else if (minutes >= 60) {
      const aux =
        Math.floor(minutes % 60) > 0 ? Math.floor(minutes % 60) + ' min' : '';
      return Math.floor((minutes / 60) % 24) + ' h' + aux;
    } else {
      return Math.floor(minutes) + ' min';
    }
  }
}
