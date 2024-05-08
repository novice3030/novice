import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../../components/Counter.component';
import { DisplayCountComponent } from '../../components/display-count/DisplayCount.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-page-counter',
  standalone: true,
  imports: [CommonModule, CounterComponent, DisplayCountComponent, MatButtonModule],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
  count = signal<number>(2);
  add() {
    this.count.update((count) => count + 1);
  }
  decrease() {
    this.count.update((count) => count - 1);
  }
}
