/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, Input, ViewEncapsulation } from '@angular/core';

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
