import { Component } from '@angular/core';
import { ClipboardDirective } from './clipboard.directive';

@Component({
  selector: 'ctc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ctc works!';

  public logError(error: Error): void {
    console.group('Clipboard Error');
    console.error(error);
    console.groupEnd();
  }

  public logSuccess(value: string): void {
    console.group('Clipboard Success');
    console.log(value);
    console.groupEnd();
  }
}
