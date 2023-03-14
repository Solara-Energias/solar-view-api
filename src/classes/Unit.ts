import {
  Integrator,
  Location,
  Owner,
  Performance,
  Portal,
  Status,
  Unified,
} from '../typings/unit';

export class Unit {
  private baseUrl = 'https://api-v2.solarview.com.br/';

  performance?: Performance;
  economy?: number;
  id: number;
  installAt?: Date;
  integrator: Integrator;
  location: Location;
  name: string;
  owner: Owner;
  portal: Portal;
  status: Status;
  type: number;
  unified: Unified;
  isPublic?: boolean;
  hasPerformanceData?: boolean;

  constructor(data: any) {
    this.performance = data.performanceData
      ? {
          '30d':
            data.consumerUnit30dPerformance !== '"NULL"'
              ? JSON.parse(data.consumerUnit30dPerformance)
              : undefined,
          '12m':
            data.consumerUnit12mPerformance !== '"NULL"'
              ? JSON.parse(data.consumerUnit12mPerformance)
              : undefined,
          total:
            data.consumerUnitTotalPerformance !== '"NULL"'
              ? JSON.parse(data.consumerUnitTotalPerformance)
              : undefined,
        }
      : undefined;

    this.economy = data.consumerUnitEconomia
      ? Number(data.consumerUnitEconomia)
      : undefined;
    this.name = data.consumerUnitName.replaceAll('\t', '');
    this.type = data.consumerUnitType;
    this.id = data.consumerUnitId;
    this.installAt = data.consumerUnitInstallDate
      ? new Date(data.consumerUnitInstallDate)
      : undefined;
    this.integrator = {
      id: data.consumerUnitIntegratorUserId,
      username: data.consumerUnitIntegratorUsername,
    };
    this.location = {
      city: data.consumerUnitLocationCity,
      region: data.consumerUnitLocationRegion,
    };
    this.owner = {
      id: data.consumerUnitOwnerUserId,
      email: data.consumerUnitOwnerEmail,
      username: data.consumerUnitOwnerUsername,
      phones: [data.consumerUnitOwnerTel1, data.consumerUnitOwnerTel2].filter(
        (_) => _
      ),
    };
    this.portal = {
      id: data.consumerUnitPortalId,
      name: data.consumerUnitPortalName,
      icon: this.baseUrl + data.consumerUnitPortalIconUrl,
    };
    this.status = {
      id: data.consumerUnitStatusId,
      time: data.consumerUnitStatusTime,
    };
    this.unified = {
      id: data.consumerUnitUnificacaoId || undefined,
      quantity: data.consumerQuantidadeUnificacao || undefined,
    };
    this.isPublic = Boolean(data.isPublic);
    this.hasPerformanceData = Boolean(data.performanceData);
  }
}
