/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  // Attribute,
  ChangeDetectionStrategy,
  Component,
  // ElementRef,
  Input,
  // Renderer2,
  ViewEncapsulation } from '@angular/core';
// import { FlxThemeService, FlxTheme } from '@angular/material/core';

@Component({
  moduleId: module.id,
  selector: 'flx-avatar',
  templateUrl: 'avatar.html',
  styleUrls: ['avatar.css'],
  host: {
    'class': 'flx-avatar'
  },
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlxAvatar {
  private _imagePath: string;
  private _icon: string;

  hasImage = false;
  hasIcon = false;
  hasLetter = false;

  @Input()
  get image() { return this._imagePath; }
  set image(value: string) {
    this._imagePath = value;
    this.hasImage = true;
  }

  @Input()
  get icon() { return this._icon; }
  set icon(value: string) {
    this._icon = value;
    this.hasIcon = true;
  }
}
