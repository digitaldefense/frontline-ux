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
import { Subject } from 'rxjs/Subject';
// import { FlxThemePresets } from './presets';
import { FlxColorPalette } from './palette';
import { FlxTheme } from './theme';
import { Observable } from 'rxjs/Observable';

// const GRAY_VARIANTS = ['darkest', 'darker', 'dark', 'medium', 'light', 'lighter', 'lighest'];

let black = 'rgba(0,0,0,.87)';
let white = '#fff';
let blue = '#2196f3';
let pink = '#e91e63';

// export class Theme {
//   name: string;
//   domain: 'light' | 'dark';
//   // background: string;
//   // text: string;
//   // primary: string;
//   // primaryLight: string;
//   // primaryDark: string;
//   // accent: string;
//   // accentLight: string;
//   // accentDark: string;
// }

// export const BASECOATS: Theme[] = [
//   { name: 'light', domain: 'light', background: white, text: black, primary: blue,
//   primaryLight: blue, primaryDark: blue, accent: pink, accentLight: pink, accentDark: pink },
//   { name: 'dark', domain: 'dark', background: black, text: white, primary: blue,
//   primaryLight: blue, primaryDark: blue, accent: pink, accentLight: pink, accentDark: pink },
// ];

@Injectable()
export class FlxThemeService {
  private _theme$: Subject<FlxTheme> = new Subject();

  theme = this._theme$.asObservable();

  constructor(private _palette: FlxColorPalette) {}

  /** Initialize the Theme by name */
  setTheme(value: string) {
    const theme = new FlxTheme(value);
    this._theme$.next(<FlxTheme>theme);
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
