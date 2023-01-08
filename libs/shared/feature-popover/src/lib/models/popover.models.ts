import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { ElementRef } from '@angular/core';
import { PopoverContent } from './popover-ref';

export interface PopoverParams<T> {
  width?: string | number;
  height?: string | number;
  origin: ElementRef | HTMLElement;
  position?: ConnectionPositionPair[];
  content: PopoverContent;
  data?: T;
  offsetY?: number;
  offsetX?: number;
}
