import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-count',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './DisplayCount.component.html',
  styleUrl: './DisplayCount.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisplayCountComponent {
  count = input.required<number>();
}
