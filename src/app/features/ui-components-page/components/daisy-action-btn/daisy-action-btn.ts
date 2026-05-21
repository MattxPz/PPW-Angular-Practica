import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-daisy-action-btn',
  imports: [],
  templateUrl: './daisy-action-btn.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyActionBtn {

  text = input.required<string>();
  isLoading = input<boolean>(false);
  btnClass = input<string>('btn-primary');

}
