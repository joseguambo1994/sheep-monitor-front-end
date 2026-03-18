import { Component, input } from '@angular/core';

import { DetectionZone } from '../../../../core/models/monitoring.models';

@Component({
  selector: 'app-camera-feed',
  templateUrl: './camera-feed.component.html',
  styleUrl: './camera-feed.component.css'
})
export class CameraFeedComponent {
  readonly imageUrl = input.required<string>();
  readonly zones = input.required<DetectionZone[]>();
}