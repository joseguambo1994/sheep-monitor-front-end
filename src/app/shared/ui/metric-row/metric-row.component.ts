import { Component, computed, input } from '@angular/core';

type MetricTone = 'neutral' | 'positive' | 'warning';

interface MetricRowViewModel {
  id: string;
  iconLabel: string;
  label: string;
  value: number;
  tone: MetricTone;
  showPlusSign?: boolean;
}

@Component({
  selector: 'app-metric-row',
  templateUrl: './metric-row.component.html',
  styleUrl: './metric-row.component.css'
})
export class MetricRowComponent {
  readonly metric = input.required<MetricRowViewModel>();

  readonly formattedValue = computed(() => {
    const item = this.metric();
    const value = Math.max(0, item.value);

    if (item.showPlusSign) {
      return `+${value}`;
    }

    return `x${value}`;
  });
}
