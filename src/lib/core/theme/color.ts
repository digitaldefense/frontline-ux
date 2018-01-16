/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Constructor } from '../common-behaviors/constructor';
import { ElementRef, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FlxThemeService, FlxTheme } from './index';

/** @docs-private */
export interface FlxCanColor {
  /** Theme color palette for the component. */
  color: FlxColor;
}

/** @docs-private */
export interface FlxElementRef {
  _elementRef: ElementRef;
  _renderer: Renderer2;
  _themeSvc: FlxThemeService;
}

/** Possible color palette values.  */
export type FlxColor = 'primary' | 'accent' | 'warn' | undefined;

/** Mixin to augment a directive with a `color` property. */
export function mixinFlxColor<T extends Constructor<FlxElementRef>>(base: T,
  defaultColor?: FlxColor): Constructor<FlxCanColor> & T {
  return class extends base {
    private _color: FlxColor;

    private _subscription: Subscription;

    get color(): FlxColor { return this._color; }
    set color(value: FlxColor) {
      const colorPalette = value || defaultColor;
      let elem = this._elementRef.nativeElement;

      if (colorPalette !== this._color) {
        if (this._color) {
          // this._elementRef.nativeElement.classList.remove(`flx-${this._color}`);
          this._renderer.removeClass(elem, `flx-${this._color}`);
        }
        if (colorPalette) {
          // this._elementRef.nativeElement.classList.add(`flx-${colorPalette}`);
          this._renderer.addClass(elem, `flx-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // Set the default color that can be specified from the mixin.
      this.color = defaultColor;

      this._subscription = this._themeSvc.theme.subscribe((theme: FlxTheme) => {
        this._applyThemeColors(theme);
      });
    }

    private _applyThemeColors(theme) {
      const elem = this._elementRef.nativeElement;
      const color = (this._color === undefined) ? 'primary' : this._color;
      if (this._isTextNode(elem)) {
        this._renderer.setStyle(elem, 'color', theme[color]);
      } else {
        this._renderer.setStyle(elem, 'background-color', theme[color]);
        this._renderer.setStyle(elem, 'color', theme.text);
      }
    }

    private _isTextNode(element: HTMLElement): Boolean {
      const textNodes = [
        'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'BUTTON', 'SPAN', 'I', 'STRONG', 'EM', 'B'
      ];
      return textNodes.indexOf(element.tagName) !== -1;
    }
  };
}

