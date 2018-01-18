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
}

/** Possible color palette values.  */
export type ThemePalette = string | undefined;

const textNodes = ['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'SPAN', 'I', 'STRONG', 'EM', 'B', 'MAT-ICON'];

const accentElements = ['A', 'BUTTON'];

/** Mixin to augment a directive with a `color` property. */
export function mixinColor<T extends Constructor<HasElementRef>>(base: T,
    defaultColor?: ThemePalette): Constructor<CanColor> & T {
  return class extends base {
    private _color: ThemePalette;

    private _subscription: Subscription;

    private _theme: FlxTheme;

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

      this._applyThemeColors(this._theme);
    }

    constructor(...args: any[]) {
      super(...args);

      if (this._themeSvc !== undefined) { this._theme = this._themeSvc.theme.getValue(); }

      // Set the default color that can be specified from the mixin.
      this._setColor();
    }

    private _setColor() {
      const elem = this._elementRef.nativeElement;
      if (accentElements.indexOf(elem.tagName) !== -1) {
        defaultColor = 'accent';
      }
      this.color = defaultColor;
    }

    private _applyThemeColors(theme) {
      if (this._renderer === undefined || this._color === undefined) { return; }

      const elem = this._elementRef.nativeElement;
      if (this._isTextNode(elem)) {
        this._renderer.setStyle(elem, 'color', theme[this._color]);
      } else {
        const reverse = this._color + 'Contrast';
        this._renderer.setStyle(elem, 'background-color', theme[this._color]);
        this._renderer.setStyle(elem, 'color', theme[reverse]);
      }
    }

    // Anchor and Button elements need to be handled by their class name since their appearances
    // can vary depending on button style
    private _isTextNode(element: HTMLElement): Boolean {
      if (element.tagName === 'BUTTON' || element.tagName === 'A') {
        const classList = element.classList;
        return Boolean(classList.contains('mat-button') || classList.contains('mat-icon-button'));
      }
      return textNodes.indexOf(element.tagName) !== -1;
    }
  };
}

