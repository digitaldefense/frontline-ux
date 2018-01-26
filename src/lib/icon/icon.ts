/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import {CanColor, mixinColor, FlxThemeService} from '@angular/material/core';


// Boilerplate for applying mixins to MatIcon.
/** @docs-private */
export class MatIconBase {
  constructor(
    public _elementRef: ElementRef,
    public _renderer: Renderer2,
    public _themeSvc: FlxThemeService,
  ) {}
}
export const _MatIconMixinBase = mixinColor(MatIconBase);


/**
 * Component to display an icon. It can be used in the following ways:
 *
 * - Specify the svgIcon input to load an SVG icon from a URL previously registered with the
 *   addSvgIcon, addSvgIconInNamespace, addSvgIconSet, or addSvgIconSetInNamespace methods of
 *   MatIconRegistry. If the svgIcon value contains a colon it is assumed to be in the format
 *   "[namespace]:[name]", if not the value will be the name of an icon in the default namespace.
 *   Examples:
 *     `<mat-icon svgIcon="left-arrow"></mat-icon>
 *     <mat-icon svgIcon="animals:cat"></mat-icon>`
 *
 * - Use a font ligature as an icon by putting the ligature text in the content of the `<mat-icon>`
 *   component. By default the Material icons font is used as described at
 *   http://google.github.io/material-design-icons/#icon-font-for-the-web. You can specify an
 *   alternate font by setting the fontSet input to either the CSS class to apply to use the
 *   desired font, or to an alias previously registered with MatIconRegistry.registerFontClassAlias.
 *   Examples:
 *     `<mat-icon>home</mat-icon>
 *     <mat-icon fontSet="myfont">sun</mat-icon>`
 *
 * - Specify a font glyph to be included via CSS rules by setting the fontSet input to specify the
 *   font, and the fontIcon input to specify the icon. Typically the fontIcon will specify a
 *   CSS class which causes the glyph to be displayed via a :before selector, as in
 *   https://fortawesome.github.io/Font-Awesome/examples/
 *   Example:
 *     `<mat-icon fontSet="fa" fontIcon="alarm"></mat-icon>`
 */
@Component({
  moduleId: module.id,
  template: '<ng-content></ng-content>',
  selector: 'mat-icon',
  exportAs: 'matIcon',
  styleUrls: ['icon.css'],
  inputs: ['color'],
  host: {
    'role': 'img',
    'class': 'mat-icon fas',
  },
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class MatIcon extends _MatIconMixinBase implements CanColor {

  @Input() ngClass: string[] | Set<string> | { [icn: string]: any };

  constructor(
      elementRef: ElementRef,
      renderer: Renderer2,
      themeSvc: FlxThemeService,
      @Attribute('aria-hidden') ariaHidden: string) {
    super(elementRef, renderer, themeSvc);

    // If the user has not explicitly set aria-hidden, mark the icon as hidden, as this is
    // the right thing to do for the majority of icon use-cases.
    if (!ariaHidden) {
      elementRef.nativeElement.setAttribute('aria-hidden', 'true');
    }
  }
}
