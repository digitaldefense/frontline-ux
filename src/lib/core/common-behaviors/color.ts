/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Constructor} from './constructor';
import {ElementRef, Renderer2} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { FlxThemeService, FlxTheme } from '../theme/index';

/** @docs-private */
export interface CanColor {
  /** Theme color palette for the component. */
  color: ThemePalette;
}

/** @docs-private */
export interface HasElementRef {
  _elementRef: ElementRef;
  _renderer?: Renderer2;
  _themeSvc?: FlxThemeService;
  _params?: any;
}

/** Possible color palette values.  */
// export type ThemePalette = 'primary' | 'accent' | 'warn' | 'primary-x' | 'accent-x' | 'warn-x'
//   | 'danger' | 'danger-x' | undefined;
export type ThemePalette = string | undefined;

/** Mixin to augment a directive with a `color` property. */
export function mixinColor<T extends Constructor<HasElementRef>>(base: T,
    defaultColor?: ThemePalette): Constructor<CanColor> & T {
  return class extends base {
    private _color: ThemePalette;

    private _subscription: Subscription;

    get color(): ThemePalette { return this._color; }
    set color(value: ThemePalette) {
      const colorPalette = value || defaultColor;

      if (colorPalette !== this._color) {
        if (this._color) {
          this._elementRef.nativeElement.classList.remove(`mat-${this._color}`);
        }
        if (colorPalette) {
          this._elementRef.nativeElement.classList.add(`mat-${colorPalette}`);
        }

        this._color = colorPalette;
      }
    }

    constructor(...args: any[]) {
      super(...args);

      // Set the default color that can be specified from the mixin.
      this.color = defaultColor;

      if (this._themeSvc !== undefined) {
        this._subscription = this._themeSvc.theme.subscribe((theme: FlxTheme) => {
          this._applyThemeColors(theme);
        });
      }
    }

    private _applyThemeColors(theme) {
      if (this._renderer === undefined) { return; }

      const elem = this._elementRef.nativeElement;
      const color = (this._color === undefined) ? 'primary' : this._color;
      if (this._isTextNode(elem)) {
        this._renderer.setStyle(elem, 'color', theme[color]);
      } else {
        const reverse = color + 'Contrast';
        this._renderer.setStyle(elem, 'background-color', theme[color]);
        this._renderer.setStyle(elem, 'color', theme[reverse]);
      }
    }

    private _isTextNode(element: HTMLElement): Boolean {
      const textNodes = [
        'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'SPAN', 'I', 'STRONG', 'EM', 'B', 'A'
      ];
      return textNodes.indexOf(element.tagName) !== -1;
    }
  };
}

