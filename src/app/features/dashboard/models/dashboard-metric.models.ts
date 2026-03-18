export type MetricTone = 'neutral' | 'positive' | 'warning';

export interface DashboardMetric {
  id: string;
  iconLabel: string;
  label: string;
  value: number;
  tone: MetricTone;
  showPlusSign?: boolean;
}