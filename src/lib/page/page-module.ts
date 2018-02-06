/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {NgModule} from '@angular/core';
import { FmPage, FmPageTitle, FmPageSubtitle, FmPageControls } from './page';


@NgModule({
  exports: [FmPage, FmPageTitle, FmPageSubtitle, FmPageControls],
  declarations: [FmPage, FmPageTitle, FmPageSubtitle, FmPageControls],
})
export class FmPageModule {}
