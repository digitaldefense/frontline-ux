/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { FlxThemeService } from '@angular/material/core';

@Directive({
  selector: '[flxGhost]'
})
export class FlxGhost {
  private _ghost: string;

  @Input('flxGhost') get ghost(): string { return this._ghost; }
  set ghost(value: string) {
    this._ghost = value;
    this._themeSvc.setTheme(value);
    this._getBodyTag(this._element.nativeElement);
  }
  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _themeSvc: FlxThemeService) {}

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
    // const theme = { background: '#333', text: 'white', domain: 'dark' };
    this._renderer.setStyle(body, 'background-color', theme.background);
    this._renderer.setStyle(body, 'color', theme.text);
    this._renderer.addClass(body, `fl-theme-${theme.domain}`);
  }
}
