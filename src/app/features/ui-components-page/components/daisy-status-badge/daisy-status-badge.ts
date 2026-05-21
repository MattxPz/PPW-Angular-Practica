import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-daisy-status-badge',
  imports: [],
  templateUrl: './daisy-status-badge.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyStatusBadge {

  label = input.required<string>();
  color = input<string>('badge-primary');
  outline = input<boolean>(false);

}
