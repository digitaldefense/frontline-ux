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

import {
  Component,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewEncapsulation } from '@angular/core';
import { FlxThemeService } from './theme.service';

@Directive({
  selector: '[flxTheme]',
})
export class FlxTheme {
  private _theme: string;

  @Input('flxTheme') get theme() { return this._theme; }
  set theme(value: string) {
    this._theme = value;
    this._themeSvc.setTheme(value);
    this._getBodyTag(this._element.nativeElement);
  }

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _themeSvc: FlxThemeService
  ) {}

  private _getBodyTag(startNode: HTMLElement) {
    let parent: HTMLElement = this._renderer.parentNode(startNode);
    if (parent.tagName !== 'BODY') {
      this._getBodyTag(parent);
    } else {
      this._applyThemeStyles(parent);
    }
  }

  private _applyThemeStyles(body: HTMLElement) {
    const theme = this._themeSvc.theme;
    console.log(theme);
    this._renderer.setStyle(body, 'background-color', theme.background);
    this._renderer.setStyle(body, 'color', theme.text);
    this._renderer.addClass(body, `fl-theme-${theme.domain}`);
  }
}
