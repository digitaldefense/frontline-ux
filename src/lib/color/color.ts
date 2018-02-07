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

const textNodes = ['H1', 'H2', 'H3', 'H4', 'H5', 'P', 'SPAN', 'I', 'STRONG', 'EM', 'B', 'KBD',
        'VAR'];

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
      this._setElemColors(color);
    }

  private _setElemColors(color: string) {
    let background = '';
    let foreground = '';

    if (color.charAt(0) === '#') {
      // Support custom Hex colors
      background = color;
      foreground = 'white';
    } else {
      const contrast = color + 'Contrast';
      const palette = ['danger', 'warn', 'success'];
      background = this._theme[color];
      foreground = (palette.indexOf(color) !== -1) ? 'white' : this._theme[contrast];
    }
    this._applyThemeColors(background, foreground);
  }

  private _applyThemeColors(background: string, foreground: string) {
    if (this._renderer === undefined) { return; }
    const elem = this._element.nativeElement;

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
    return textNodes.indexOf(element.tagName) !== -1;
  }
}
