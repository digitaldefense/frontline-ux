/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Directive,
  ElementRef,
  Renderer2 } from '@angular/core';
import { CanColor, mixinColor, FlxTheme, FlxThemeService } from '@angular/material/core';

// Boilerplate for applying mixins to anchor elements.
/** @docs-private */
export class FmLinkBase {
  constructor(
    public _elementRef: ElementRef,
    public _renderer: Renderer2,
    public _themeSvc: FlxThemeService
  ) { }
}
export const _FmLinkMixinBase = mixinColor(FmLinkBase, 'accent');

@Directive({
  selector: 'a[fmLink]',
  exportAs: 'fmLink'
})
export class FmLink extends _FmLinkMixinBase implements CanColor {
  constructor(
    element: ElementRef,
    renderer: Renderer2,
    themeSvc: FlxThemeService) {
    super(element, renderer, themeSvc);
  }
}
