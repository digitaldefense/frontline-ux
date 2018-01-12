/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { FlxThemeService, FlxThemePresets } from '@angular/material/core';
import { FlxGhost } from './ghost';

@NgModule({
  exports: [FlxGhost],
  declarations: [FlxGhost],
  providers: [FlxThemeService, FlxThemePresets]
})
export class FlxGhostModule {}
