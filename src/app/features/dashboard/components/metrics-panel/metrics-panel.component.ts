import { Component, input } from '@angular/core';

import { DashboardMetric } from '../../models/dashboard-metric.models';
import { MetricRowComponent } from '../../../../shared/ui/metric-row/metric-row.component';

@Component({
  selector: 'app-metrics-panel',
  imports: [MetricRowComponent],
  templateUrl: './metrics-panel.component.html',
  styleUrl: './metrics-panel.component.css'
})
export class MetricsPanelComponent {
  readonly loading = input(false);
  readonly metrics = input.required<DashboardMetric[]>();
}