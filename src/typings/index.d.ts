import { Unit } from '../classes/Unit';

export enum UnitStatus {
  Online = ['2', '11'],
  NoGeneration = ['5', '6'],
  NoCommunication = ['4', '10'],
  NoMonitored = ['1', '7', '8', '9', '12'],
  Offline = ['3', '13'],
}

export enum UnitSUS {
  Good = ['3'],
  Medium = ['2'],
  Bad = ['1'],
  NoData = ['0'],
}

export interface FetchUnitOptions {
  pageSize: number;
  search?: string;
  status?: UnitStatus;
  sus?: UnitSUS;
  orderBy?: string;
}

export interface FetchUnitData {
  units: Unit[];
  total: number;
}
