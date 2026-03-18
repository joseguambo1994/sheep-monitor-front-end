import { Component, OnInit, inject } from '@angular/core';

import { CameraFeedComponent } from '../components/camera-feed/camera-feed.component';
import { MetricsPanelComponent } from '../components/metrics-panel/metrics-panel.component';
import { DashboardFacade } from '../services/dashboard.facade';

@Component({
  selector: 'app-dashboard-page',
  imports: [CameraFeedComponent, MetricsPanelComponent],
  providers: [DashboardFacade],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit {
  protected readonly facade = inject(DashboardFacade);

  ngOnInit(): void {
    this.facade.startLiveUpdates();
  }
}