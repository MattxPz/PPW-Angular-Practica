import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GlassStatCard } from "./components/glass-stat-card/glass-stat-card";
import { GradientCtaBanner } from "./components/gradient-cta-banner/gradient-cta-banner";
import { FeatureChipList } from "./components/feature-chip-list/feature-chip-list";
//import { DaisyActionBtn } from "./components/daisy-action-btn/daisy-action-btn";
import { DaysiAlertBox } from './components/daisy-alert-box/daisy-alert-box';
import { DaisyStatusBadge } from './components/daisy-status-badge/daisy-status-badge';
import { DaisyActionBtn } from './components/daisy-action-btn/daisy-action-btn';
import { DaisyUserAvatar } from './components/daisy-user-avatar/daisy-user-avatar';
import { DaisyProgressBar } from './components/daisy-progress-bar/daisy-progress-bar';

@Component({
  selector: 'app-ui-components-page',
  imports: [GlassStatCard, GradientCtaBanner, FeatureChipList, DaisyStatusBadge, DaisyActionBtn, DaisyUserAvatar, DaisyProgressBar],
  templateUrl: './ui-components-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiComponentsPage {

   readonly quickChips = [
    'Glass Surface',
    'Gradient CTA',
    'Responsive Grid',
    'Standalone Components',
    'Tailwind + DaisyUI',
    'Responsive',
    'DaisyUI',
    'Signals'
  ];

}
