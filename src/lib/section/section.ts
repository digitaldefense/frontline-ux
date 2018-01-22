/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation } from '@angular/core';
import { FlxTheme, FlxThemeService } from '@angular/material/core';

@Component({
  moduleId: module.id,
  selector: 'flx-section',
  templateUrl: 'section.html',
  styleUrls: ['section.css'],
  host: {
    class: 'flx-section'
  },
  encapsulation: ViewEncapsulation.None
})
export class FlxSection implements AfterViewInit {
  private _theme: FlxTheme;

  @Input() title: string;

  @ViewChild('sectionHeader') _header: ElementRef;
  @ViewChild('sectionTitle') _title: ElementRef;

  constructor(
    private _renderer: Renderer2,
    private _themeSvc: FlxThemeService
  ) {
    this._theme = _themeSvc.theme.getValue();
  }

  ngAfterViewInit() {
    const color = this._theme.primary;
    const titleElem = this._title.nativeElement;
    const styleValue = `linear-gradient(to right, ${color}, ${color} 50px, rgba(0, 0, 0, 0) 50px)`;
    this._renderer.setStyle(titleElem, 'border-image', styleValue);

    const headerElem = this._header.nativeElement;
    this._renderer.setStyle(headerElem, 'border-bottom-color', color);
  }
}
