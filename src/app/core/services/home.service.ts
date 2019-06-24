import { MockData, SerialisedMockData } from './../shared/types/mockData';
import { Injectable } from '@angular/core';
import * as mock from '../../mock_data/data.json';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  public isActivated = false;

  public activate(): void {
    this.isActivated = true;
  }

  private serialiser(dataToSerialise: MockData[]): SerialisedMockData[] {
    const helper = ({ object, key }) => {
      return Object.entries(object).reduce((acc, item) => {
        const [itemKey, value] = item;
        if (value && typeof value === 'object') {
          return {
            ...acc,
            ...helper({ key: `${key}_${itemKey}`, object: value }),
          };
        }
        acc[`${key}_${itemKey}`] = value;
        return acc;
      }, {});
    };

    return dataToSerialise.map(item => {
      const itemKeys = Object.keys(item);

      for (const key of itemKeys) {
        if (typeof item[key] === 'object') {
          const dataFromHelper = helper({ object: item[key], key });
          item = { ...item, ...dataFromHelper };
          delete item[key];
        }
      }

      return item;
    });
  }

  public getMockData(): SerialisedMockData[] {
    return this.serialiser(mock.data);
  }
}
