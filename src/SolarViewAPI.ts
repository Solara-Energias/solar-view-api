import { POST } from './api';
import { Unit } from './classes/Unit';
import { FetchUnitData, FetchUnitOptions } from './typings';

export class SolarViewAPI {
  public unitBaseUrl = 'https://api-v2.solarview.com.br/';

  constructor(public apiKey: string) {}

  public async fetchUnits(
    options: FetchUnitOptions
  ): Promise<FetchUnitData | undefined> {
    const res = await POST(this.unitBaseUrl + 'unitList?page=1', options, {
      headers: { 'solarview-tokenUniversal': this.apiKey },
    });

    const data = await res.json();

    if (res.ok && data) {
      return {
        units: data.data.map((unit: any) => new Unit(unit)),
        total: data.total,
      };
    }
    return undefined;
  }
}
