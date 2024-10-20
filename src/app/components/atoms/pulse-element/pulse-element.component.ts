import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  selector: 'pulse-element',
  template: `<div class="pulse-contianer">
    <div class="pulse-position pulse-gray"></div>
    <div class="pulse-position pulse-green"></div>
    <div class="pulse-position pulse-active"></div>
  </div>`,
  styleUrl: './pulse-element.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PulseElementComponent {}
