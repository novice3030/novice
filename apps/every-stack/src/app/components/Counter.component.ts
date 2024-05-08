import {
  ChangeDetectionStrategy,
  Component,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './Counter.component.html',
  styleUrl: './Counter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  count = signal<number>(5);

  increaseClicked() {
    this.count.update((count) => count + 1);
  }

  decreasmentClicked() {
    this.count.update((count) => count - 1);
  }
}
