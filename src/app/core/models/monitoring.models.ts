export type ZoneSeverity = 'info' | 'warning' | 'critical';

export interface DetectionZone {
  id: string;
  label: string;
  leftPct: number;
  topPct: number;
  widthPct: number;
  heightPct: number;
  severity: ZoneSeverity;
}

export interface SheepCounts {
  males: number;
  females: number;
  newborns: number;
  heatCycles: number;
  sick: number;
}

export interface MonitoringSnapshot {
  farmName: string;
  imageUrl: string;
  capturedAt: string;
  zones: DetectionZone[];
  counts: SheepCounts;
}