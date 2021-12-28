import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ButtonComponent implements OnInit {
  @Input('label') label: string | null='abc';
  @Input('pink') pink: boolean=true;
  // @Input('noShadow') noShadow: boolean;
  // @Input('bordersLeft') bordersLeft: boolean = true;
  // @Input('bordersRight') bordersRight: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
