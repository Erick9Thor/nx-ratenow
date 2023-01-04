import { Pipe, PipeTransform } from '@angular/core';

interface Config {
  maxLength: number;
}

@Pipe({
  name: 'ellipsisPipe'
})
export class EllipsisPipe implements PipeTransform {
  transform(value: string, config: Config): string {
    let transformedString = '';
    if (
      config.maxLength >= 0 &&
      typeof value === 'string' &&
      config.maxLength < value.length
    ) {
      transformedString = value.slice(0, config.maxLength);
      return `${transformedString.trim()}...`;
    }
    return value;
  }
}
