/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'flx-spacer',
  template: '',
  styleUrls: ['spacer.css'],
  host: { class: 'flx-spacer' },
  encapsulation: ViewEncapsulation.None
})
export class FlxSpacer {}
