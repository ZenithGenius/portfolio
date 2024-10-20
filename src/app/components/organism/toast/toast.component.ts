import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ToastService } from '@app/lib/toast/Toast.service';

@Component({
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToastComponent {
  private readonly toastService = inject(ToastService);
  public toasts = this.toastService.state.asReadonly();
  protected readonly TOAST_DEFAULT = 'default';
  protected readonly TOAST_TYPE = new Map<string, string>([
    ['success', 'success'],
    ['info', 'info'],
    ['warning', 'warning'],
    ['error', 'error'],
    ['default', 'default'],
  ]);

  protected close(ID: string): void {
    this.toastService.remove(ID);
  }
}
