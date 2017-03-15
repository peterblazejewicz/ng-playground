import { EventEmitter } from '@angular/common/src/facade/async';
import { Directive, HostListener, Input, Output } from '@angular/core';
import { ClipboardService } from './clipboard.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[clipboard]'
})
export class ClipboardDirective {


  // tslint:disable-next-line:no-input-rename
  @Input('clipboard')
  public value = '';
  // tslint:disable-next-line:no-output-rename
  @Output('clipboardCopy')
  public copyEvent = new EventEmitter<string>();
  // tslint:disable-next-line:no-output-rename
  @Output('clipboardError')
  public errorEvent = new EventEmitter<Error>();

  constructor(private clipboardService: ClipboardService) {}

  @HostListener('click')
  public copyToClipboard(): void {
    this.clipboardService
      .copy(this.value)
      .then((value: string): void => this.copyEvent.emit(value))
      .catch((error: Error): void => this.errorEvent.emit(error));
  }

}
