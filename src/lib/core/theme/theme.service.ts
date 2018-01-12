/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Digital Defence. Inc. All Rights Reserved.
 * This is a proprietary addition to Google's Material Design for Angular
 */

import { Injectable } from '@angular/core';
import { FlxThemePresets } from './presets';

// const GRAY_VARIANTS = ['darkest', 'darker', 'dark', 'medium', 'light', 'lighter', 'lighest'];

export class Theme {
  name: string;
  domain: string;
  background: string;
  text: string;
  primary: string;
  primaryLight: string;
  primaryDark: string;
  accent: string;
  accentLight: string;
  accentDark: string;
}

@Injectable()
export class FlxThemeService {
  private _theme: Theme;

  set theme(value: Theme) {
    this._theme = value;
  }
  get theme(): Theme {
    return this._theme;
  }

  constructor(private _presets: FlxThemePresets) {}

  /** Initialize the Theme by name */
  setTheme(value: string) {
    this._theme = this._presets.getTheme(value);
  }

  // /** Apply provided theme property as text color */
  // applyColor(element: any, renderer: any, color: string) {
  //   const elem = element.nativeElement;
  //   const newColor = this._isCustomColor(color) ? color : this.theme[color];
  //   renderer.setStyle(elem, 'color', newColor);
  // }

  // /** Apply provided theme property as background color */
  // applyBgColor(element: any, renderer: any, color: string) {
  //   const elem = element.nativeElement;
  //   const newColor = this._isCustomColor(color) ? color : this.theme[color];
  //   renderer.setStyle(elem, 'background-color', newColor);
  // }

  // private _isCustomColor(color: string): boolean {
  //   return Boolean(color.charAt(0) === '#');
  // }

  // private _applyThemeColor(val: string): string {
  //   if (GRAY_VARIANTS.indexOf(val) !== -1) {
  //     //
  //   }
  // }
}
