import { Injectable, Injector } from '@angular/core';
import {
  ConnectionPositionPair,
  Overlay,
  OverlayConfig,
  PositionStrategy
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PopoverRef } from '../models/popover-ref';
import { UiPopoverComponent } from '../ui-popover/ui-popover.component';
import { PopoverParams } from '../models/popover.models';

@Injectable({
  providedIn: 'root'
})
export abstract class PopoverService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  open<T>({
    origin,
    content,
    data,
    width,
    height,
    position,
    offsetX,
    offsetY
  }: PopoverParams<T>): PopoverRef<T> {
    const overlayRef = this.overlay.create(
      this.getOverlayConfig({
        origin,
        width,
        height,
        position,
        offsetX,
        offsetY
      })
    );
    const popoverRef = new PopoverRef<T>(overlayRef, content, data as T);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(new ComponentPortal(UiPopoverComponent, null, injector));

    return popoverRef;
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  private static getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
      },
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
      }
    ];
  }

  private getOverlayConfig({
    origin,
    width,
    height,
    position,
    offsetX,
    offsetY
  }: any): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: 'popover-backdrop',
      positionStrategy: this.getOverlayPosition({
        origin,
        position,
        offsetX,
        offsetY
      }),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  createInjector(popoverRef: PopoverRef, injector: Injector) {
    return Injector.create({
      providers: [
        {
          provide: PopoverRef,
          useValue: popoverRef
        }
      ],
      parent: injector
    });
  }

  private getOverlayPosition({
    origin,
    position,
    offsetX,
    offsetY
  }: any): PositionStrategy {
    return this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(position || PopoverService.getPositions())
      .withFlexibleDimensions(true)
      .withDefaultOffsetY(offsetY || 0)
      .withDefaultOffsetX(offsetX || 0)
      .withTransformOriginOn('.ratenow-popover')
      .withPush(true);
  }
}
