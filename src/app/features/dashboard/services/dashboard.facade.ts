import { DestroyRef, Injectable, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MONITORING_SNAPSHOT_MOCK } from '../../../core/mocks/monitoring-snapshot.mock';
import { SheepMonitorApiService } from '../../../core/services/sheep-monitor-api.service';
import { DashboardMetric } from '../models/dashboard-metric.models';

@Injectable()
export class DashboardFacade {
  private readonly api = inject(SheepMonitorApiService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly snapshotState = signal(MONITORING_SNAPSHOT_MOCK);

  readonly isLoading = signal(true);
  readonly farmName = computed(() => this.snapshotState().farmName);
  readonly imageUrl = computed(() => this.snapshotState().imageUrl);
  readonly zones = computed(() => this.snapshotState().zones);
  readonly updatedAtLabel = computed(() => this.toDateLabel(this.snapshotState().capturedAt));

  readonly metrics = computed<DashboardMetric[]>(() => {
    const counts = this.snapshotState().counts;

    return [
      {
        id: 'males',
        iconLabel: 'M',
        label: 'Machos',
        value: counts.males,
        tone: 'neutral'
      },
      {
        id: 'females',
        iconLabel: 'H',
        label: 'Hembras',
        value: counts.females,
        tone: 'neutral'
      },
      {
        id: 'newborns',
        iconLabel: 'N',
        label: 'Nuevas Crias',
        value: counts.newborns,
        tone: 'neutral'
      },
      {
        id: 'heat',
        iconLabel: 'C',
        label: 'Celos',
        value: counts.heatCycles,
        tone: 'positive',
        showPlusSign: true
      },
      {
        id: 'sick',
        iconLabel: 'E',
        label: 'Enfermos',
        value: counts.sick,
        tone: 'warning',
        showPlusSign: true
      }
    ];
  });

  startLiveUpdates(refreshMs = 20000): void {
    timer(0, refreshMs)
      .pipe(
        switchMap(() => this.api.getLatestSnapshot()),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((snapshot) => {
        this.snapshotState.set(snapshot);
        this.isLoading.set(false);
      });
  }

  private toDateLabel(value: string): string {
    const parsedDate = new Date(value);

    if (Number.isNaN(parsedDate.getTime())) {
      return 'Sin captura';
    }

    return parsedDate.toLocaleString('es-CO', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  }
}