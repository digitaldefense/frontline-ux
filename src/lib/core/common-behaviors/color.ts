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

const textNodes = ['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'SPAN', 'I', 'STRONG', 'EM', 'B', 'MAT-ICON',
          'VAR', 'KBD'];

const accentElements = ['A'];

// Each color tuple consists of the threshold values for primary and accent colors
const contrastMap = {
  red: ['400', 'A200'],
  pink: ['400', 'A200'],
  purple: ['300', 'A200'],
  deepPurple: ['300', 'A200'],
  indigo: ['300', 'A200'],
  blue: ['600', 'A200'],
  lightBlue: ['700', 'A700'],
  cyan: ['700', '0'],
  teal: ['500', '0'],
  green: ['600', '0'],
  lightGreen: ['800', '0'],
  lime: ['900', '0'],
  yellow: ['0', '0'],
  amber: ['0', '0'],
  orange: ['900', '0'],
  deepOrange: ['600', 'A400'],
  brown: ['300', '0'],
  gray: ['600', '0'],
  blueGray: ['400', '0'],
};

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
      this._setDefaultColor();
    }

    private _setDefaultColor() {
      const elem = this._elementRef.nativeElement;
      if (elem.tagName === 'A') {
        this.color = defaultColor;
      }
      if (defaultColor !== undefined) {
        this.color = defaultColor;
      }
    }

    private _applyThemeColors(theme) {
      if (this._renderer === undefined || this._color === undefined) { return; }

      const elem = this._elementRef.nativeElement;
      if (this._isTextNode(elem)) {
        this._renderer.setStyle(elem, 'color', theme[this._color]);
      } else {
        // const reverse = this._color + 'Contrast';
        let reverse = this._setForeground();
        this._renderer.setStyle(elem, 'background-color', theme[this._color]);
        this._renderer.setStyle(elem, 'color', reverse);
      }
    }

    private _setForeground(): string {
      const parts: string[] = this._theme.name.split('-');
      const primary = parts[0];
      const accent = parts[1];

      let threshold: number;
      let color: string;

      switch (this._color) {
        case 'primary':
          color = this._getContrastColor('primary', parts[0], 500);
          break;
        case 'accent':
          color = this._getContrastColor('accent', parts[0], 200);
          break;
        case 'warning':
          color = 'black';
          break;
        default:
          color = 'white';
          break;
      }

      return color;
    }

    private _getContrastColor(theme: string, color: string, threshold: number): string {
      let val: string;

      if (theme === 'primary') {
        val = contrastMap[color][0];
        threshold = 500;
      } else {
        val = contrastMap[color][1];
        threshold = 200;
      }
      return (threshold >= this._parseColorValue(val)) ? 'white' : 'black';
    }

    private _parseColorValue(color: string): number {
      return (color.charAt(0) === 'A') ? parseInt(color.substr(1), 10) : parseInt(color, 10);
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

    private _isButton(element: HTMLElement): Boolean {
      if (element.tagName === 'BUTTON' || element.tagName === 'A') {
        const classList = element.classList;
        return Boolean(classList.contains('mat-button') || classList.contains('mat-icon-button' ||
          classList.contains('mat-raised-button') || classList.contains('mat-fab')));
      }
      return false;
    }
  };
}

