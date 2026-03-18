import { MonitoringSnapshot } from '../models/monitoring.models';

export const MONITORING_SNAPSHOT_MOCK: MonitoringSnapshot = {
  farmName: 'Corral Principal',
  imageUrl: '/assets/sheep-corral.svg',
  capturedAt: '2026-03-17T21:30:00-05:00',
  zones: [
    {
      id: 'z1',
      label: 'Macho',
      leftPct: 6,
      topPct: 35,
      widthPct: 16,
      heightPct: 22,
      severity: 'info'
    },
    {
      id: 'z2',
      label: 'Hembras',
      leftPct: 21,
      topPct: 42,
      widthPct: 30,
      heightPct: 18,
      severity: 'warning'
    },
    {
      id: 'z3',
      label: 'Cria',
      leftPct: 72,
      topPct: 47,
      widthPct: 14,
      heightPct: 13,
      severity: 'info'
    },
    {
      id: 'z4',
      label: 'Enfermo',
      leftPct: 88,
      topPct: 43,
      widthPct: 9,
      heightPct: 11,
      severity: 'critical'
    },
    {
      id: 'z5',
      label: 'Celo',
      leftPct: 88,
      topPct: 54,
      widthPct: 9,
      heightPct: 11,
      severity: 'warning'
    }
  ],
  counts: {
    males: 1,
    females: 6,
    newborns: 2,
    heatCycles: 4,
    sick: 2
  }
};