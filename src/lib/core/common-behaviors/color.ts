/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {Constructor} from './constructor';
import {ElementRef, Renderer2} from '@angular/core';
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

const textNodes = ['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'SPAN', 'I', 'STRONG', 'EM', 'B', 'MAT-ICON',
          'VAR', 'KBD', 'A'];

const accentElements = ['A'];

/** Mixin to augment a directive with a `color` property. */
export function mixinColor<T extends Constructor<HasElementRef>>(base: T,
    defaultColor?: ThemePalette): Constructor<CanColor> & T {
  return class extends base {
    private _theme: FlxTheme;
    private _color: ThemePalette;
    private _contrast: string;

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

      if (this.color !== undefined) {
        this._setElemColors(this.color);
        this._elementRef.nativeElement.classList.remove('default');
      }
    }

    constructor(...args: any[]) {
      super(...args);

      if (this._themeSvc !== undefined) { this._theme = this._themeSvc.theme.getValue(); }

      if (this.color === undefined && this._elementRef.nativeElement.tagName !== 'A') {
        this._elementRef.nativeElement.classList.add('default');
      } else if (this._elementRef.nativeElement.tagName === 'A' && defaultColor !== undefined) {
        this._setElemColors(defaultColor);
      }

      // Set the default color that can be specified from the mixin.
      // this._setDefaultColor();
    }

    // private _setDefaultColor() {
    //   const elem = this._elementRef.nativeElement;
    //   if (elem.tagName === 'A') {
    //     this.color = defaultColor;
    //   }
    //   if (defaultColor !== undefined) {
    //     this.color = defaultColor;
    //   }
    // }

    private _setElemColors(color: string) {
      let background = '';
      let foreground = '';

      if (color.charAt(0) === '#') {
        // Support custom Hex colors
        background = color;
        foreground = 'white';
      } else {
        const contrast = color + 'Contrast';
        const palette = ['danger', 'warning', 'success'];
        background = this._theme[color];
        foreground = (palette.indexOf(color) !== -1) ? 'white' : this._theme[contrast];
      }
      this._applyThemeColors(background, foreground);
    }

    private _applyThemeColors(background: string, foreground: string) {
      if (this._renderer === undefined) { return; }
      const elem = this._elementRef.nativeElement;

      if (this._isTextNode(elem)) {
        this._renderer.setStyle(elem, 'color', background);
      } else {
        this._renderer.setStyle(elem, 'background-color', background);
        this._renderer.setStyle(elem, 'color', foreground);
      }
    }

    // Anchor and Button elements need to be handled by their class name since their appearances
    // can vary depending on button style
    private _isTextNode(element: HTMLElement): Boolean {
      if (textNodes.indexOf(element.tagName) !== -1) {
        if (element.tagName === 'A' && element.classList.contains('mat-button')) {
          return false;
        } else {
          return true;
        }
      } else if (element.tagName === 'BUTTON' && (element.classList.contains('mat-button') ||
              element.classList.contains('mat-icon-button'))) {
        return true;
      } else {
        return false;
      }
    }
  };
}

