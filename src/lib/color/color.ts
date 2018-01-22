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

// type ThemePalette = 'primary' | 'accent' | 'warning' | 'danger' | 'success';

@Directive({
  selector: '[background-color]',
})
export class FlxBackgroundColor {
  private _theme: FlxTheme;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _themeSvc: FlxThemeService,
    @Attribute('background-color') color: string) {
      this._theme = _themeSvc.theme.getValue();
      this._setElemColor(color);
    }

  private _setElemColor(color: string) {
    const elem = this._element.nativeElement;
    if (color.charAt(0) === '#') {
      // Support custom Hex colors
    } else {
      this._renderer.setStyle(elem, 'background-color', this._theme[color]);
    }
  }
}
