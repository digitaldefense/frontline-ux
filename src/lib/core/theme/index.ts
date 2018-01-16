/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { FlxThemeService } from './theme.service';

@NgModule({
  providers: [FlxThemeService]
})
export class FlxThemeProviders {}

export { FlxCanColor, mixinFlxColor, FlxColor } from './color';
export { FlxTheme } from './theme';
export { FlxThemeService } from './theme.service';
