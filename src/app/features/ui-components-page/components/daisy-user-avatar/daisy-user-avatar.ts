import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-daisy-user-avatar',
  imports: [],
  templateUrl: './daisy-user-avatar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DaisyUserAvatar {

  imageUrl = input.required<string>();
  size = input<string>('w-12');
  isOnline = input<boolean>(false);

}
