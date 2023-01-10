import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
@Component({
  selector: 'nx-ratenow-view-main',
  templateUrl: './view-main.component.html',
  styleUrls: ['./view-main.component.scss']
})
export class ViewMainComponent {
  layoutCtrl = new UntypedFormControl('boxed');
}
