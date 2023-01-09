import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {
  transform(value: number): string {
    if (value === 0) {
      return '';
    }
    const minutes: number = Math.floor(value / 60);

    if (value >= 60) {
      if (minutes > 1440) {
        return (
          Math.round(minutes / 24 / 60) +
          'd ' +
          Math.round((minutes / 60) % 24) +
          'h ' +
          Math.round(minutes % 60) +
          'min'
        );
      } else if (minutes > 60) {
        return (
          Math.round((minutes / 60) % 24) +
          'h ' +
          Math.round(minutes % 60) +
          'min'
        );
      }
      return minutes + 'min';
    } else {
      return value + 'sec';
    }
  }
}
