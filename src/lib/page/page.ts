/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, Directive, Input, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: 'fm-page-title',
  host: {'class': 'fm-page-title mat-display-2'}
})
export class FmPageTitle {}

@Directive({
  selector: 'fm-page-subtitle',
  host: { 'class': 'fm-page-subtitle' }
})
export class FmPageSubtitle {}

@Directive({
  selector: 'fm-page-controls',
  host: { 'class': 'fm-page-control-group' }
})
export class FmPageControls {}

@Component({
  moduleId: module.id,
  selector: 'fm-page',
  templateUrl: 'page.html',
  styleUrls: ['page.css'],
  host: { 'class': 'fm-page' },
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class FmPage {
  @Input('page-title') title: string;

  @Input() ref: string;
}
