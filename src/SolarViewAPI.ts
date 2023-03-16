import { POST } from './api';
import { GeneralStatus } from './classes/GeneralStatus';
import { Unit } from './classes/Unit';
import { FetchUnitData, FetchUnitOptions } from './typings';

export class SolarViewAPI {
  public unitBaseUrl = 'https://api-v2.solarview.com.br/';

  constructor(public apiKey: string) {}

  public async fetchUnits(
    options: FetchUnitOptions
  ): Promise<FetchUnitData | undefined> {
    const res = await POST(
      this.unitBaseUrl + 'unitList?page=1',
      this.apiKey,
      options
    );

    const data = await res.json();

    if (res.ok && data) {
      return {
        units: data.data.map((unit: any) => new Unit(unit)),
        total: data.total,
      };
    }
  }

  public async fetchGeneralStatus(): Promise<GeneralStatus | undefined> {
    const res = await POST(this.unitBaseUrl + 'unitList/status', this.apiKey);

    const data = await res.json();

    if (res.ok && data) {
      return new GeneralStatus(data);
    }
  }
}
