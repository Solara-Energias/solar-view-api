export class GeneralStatus {
  status: Record<
    'online' | 'offline' | 'noGeneration' | 'noCommunication' | 'notMonitored',
    number
  >;

  performance: Record<'good' | 'medium' | 'bad' | 'noData', number>;

  constructor(data: any) {
    data = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, Number(v)])
    );

    this.status = {
      online: data.normalOperationConsumerUnit,
      offline: data.offlineConsumerUnit,
      notMonitored: data.notMonitoredConsumerUnit,
      noGeneration: data.noGenerationConsumerUnit,
      noCommunication: data.noCommunicationConsumerUnit,
    };

    this.performance = {
      good: data.goodPerformanceUnit,
      medium: data.mediumPerformanceUnit,
      bad: data.badPerformanceUnit,
      noData: data.noDataPerformanceUnit,
    };
  }
}
