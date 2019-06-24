import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
 */
@Pipe({ name: 'transformHeader' })
export class MockDataHeaderTransform implements PipeTransform {
  transform(value: string, exponent?: number): string {
    const data = value.split('_');
    return data.reduce(
      (acc, columnName, index) =>
        (acc += `${columnName[0].toUpperCase()}${columnName.slice(
          1,
          columnName.length
        )}${data.length - 1 === index ? '' : '_'}`),
      ''
    );
  }
}
