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

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { FlxTheme } from './theme';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

// const GRAY_VARIANTS = ['darkest', 'darker', 'dark', 'medium', 'light', 'lighter', 'lighest'];

const defaultTheme = new FlxTheme('blue-blue-light');

@Injectable()
export class FlxThemeService {
  theme: BehaviorSubject<FlxTheme> = new BehaviorSubject(defaultTheme);

  constructor(@Inject(DOCUMENT) private _doc: any) {}

  /** Initialize the Theme by name */
  setTheme(value: string) {
    const theme = new FlxTheme(value);
    this.theme.next(<FlxTheme>theme);
    this._applyThemeClass(theme);
  }

  private _applyThemeClass(theme) {
    const doc = this._doc.getElementsByTagName('body')[0];
    doc.classList.add(`fl-theme-${theme.domain}`);
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
