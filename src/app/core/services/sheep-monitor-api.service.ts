import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { MONITORING_SNAPSHOT_MOCK } from '../mocks/monitoring-snapshot.mock';
import { MonitoringSnapshot } from '../models/monitoring.models';

@Injectable({ providedIn: 'root' })
export class SheepMonitorApiService {
  private readonly http = inject(HttpClient);
  private readonly latestSnapshotEndpoint = '/api/monitoring/snapshot/latest';

  getLatestSnapshot(): Observable<MonitoringSnapshot> {
    return this.http.get<MonitoringSnapshot>(this.latestSnapshotEndpoint).pipe(
      map((snapshot) => this.normalizeSnapshot(snapshot)),
      catchError(() => of(MONITORING_SNAPSHOT_MOCK))
    );
  }

  private normalizeSnapshot(snapshot: MonitoringSnapshot): MonitoringSnapshot {
    if (!snapshot?.zones?.length) {
      return MONITORING_SNAPSHOT_MOCK;
    }

    return {
      ...snapshot,
      zones: snapshot.zones.map((zone) => ({
        ...zone,
        leftPct: this.clamp(zone.leftPct),
        topPct: this.clamp(zone.topPct),
        widthPct: this.clamp(zone.widthPct),
        heightPct: this.clamp(zone.heightPct)
      }))
    };
  }

  private clamp(value: number): number {
    return Math.min(100, Math.max(0, value));
  }
}