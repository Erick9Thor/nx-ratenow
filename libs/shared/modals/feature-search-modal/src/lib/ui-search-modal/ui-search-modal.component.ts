import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'nx-ratenow-ui-search-modal',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatRippleModule],
  templateUrl: './ui-search-modal.component.html',
  styleUrls: ['./ui-search-modal.component.scss']
})
export class UiSearchModalComponent {}
