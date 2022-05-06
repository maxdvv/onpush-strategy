import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-input',
  templateUrl: './display-input.component.html',
  styleUrls: ['./display-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayInputComponent implements OnInit {
  inputText = '';
  inputKey = '';

  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onChange($event: any): void {
    setTimeout(() => {
      console.log('Timeout 3 sec');
      console.log('Event', $event.target.value);
      this.inputText = $event.target.value;
      this.ref.detectChanges();
    }, 3000)
  }

  showKey($event: any): void {
    setTimeout(() => {
      console.log('Timeout 1 sec');
      console.log('Event showKey', $event.target.value);
      this.inputKey = $event.target.value;
      this.ref.markForCheck();
    }, 1000)
  }

}
