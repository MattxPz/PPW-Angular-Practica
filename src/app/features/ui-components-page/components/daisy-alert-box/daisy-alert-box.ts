import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-daysi-alert-box',
  imports: [],
  templateUrl: './daysi-alert-box.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaysiAlertBox {

  type = input<string>('alert-info');
  message = input.required<string>();

}
