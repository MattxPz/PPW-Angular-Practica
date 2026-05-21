import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-daisy-progress-bar',
  imports: [],
  templateUrl: './daisy-progress-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyProgressBar {

  value = input.required<number>();
  max = input<number>(100);
  color = input<string>('progress-primary');

}
