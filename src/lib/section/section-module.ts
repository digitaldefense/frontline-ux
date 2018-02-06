/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { FmSection } from './section';

@NgModule({
  exports: [FmSection],
  declarations: [FmSection],
})
export class FmSectionModule { }
