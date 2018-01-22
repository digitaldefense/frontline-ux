/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Attribute,
  Directive,
  ElementRef,
  Input,
  Renderer2 } from '@angular/core';
import { FlxThemeService, FlxTheme } from '@angular/material/core';

const textNodes = ['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'SPAN', 'I', 'STRONG', 'EM', 'B'];

@Directive({
  selector: '[fcolor]',
})
export class FlxColor {
  private _theme: FlxTheme;
  private _color: string;
  private _contrast: string;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _themeSvc: FlxThemeService,
    @Attribute('fcolor') color: string) {
      this._theme = _themeSvc.theme.getValue();
      this._setElemColor(color);
    }

  private _setElemColor(color: string) {
    if (color.charAt(0) === '#') {
      // Support custom Hex colors
      this._color = color;
    } else {
      let contrast = color + 'Contrast';
      let palette = ['danger', 'warning', 'success'];
      this._color = this._theme[color];
      this._contrast = (palette.indexOf(color) !== -1) ? 'white' : this._theme[contrast];
    }
    this._renderElemColor();
  }

  /** Applies the color to either the background or text based on element type */
  private _renderElemColor() {
    const elem = this._element.nativeElement;
    if (this._isTextNode(this._element.nativeElement)) {
      this._renderer.setStyle(elem, 'color', this._color);
    } else {
      this._renderer.setStyle(elem, 'background-color', this._color);
      if (this._contrast != null) {
        this._renderer.setStyle(elem, 'color', this._contrast);
      }
    }
  }

  private _isTextNode(element: HTMLElement): Boolean {
    if (element.tagName === 'BUTTON' || element.tagName === 'A') {
      const classList = element.classList;
      return Boolean(classList.contains('mat-button') || classList.contains('mat-icon-button'));
    }
    return textNodes.indexOf(element.tagName) !== -1;
  }
}
