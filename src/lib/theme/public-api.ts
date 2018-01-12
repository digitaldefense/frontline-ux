/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModule } from '@angular/core';
import { FlxTheme } from './theme';
// import { FlxThemeService } from './theme.service';
// import { ThemePresets } from './presets';


@NgModule({
  exports: [FlxTheme],
  declarations: [FlxTheme],
  // providers: [FlxThemeService, ThemePresets],
})
export class FlxThemeModule {}

// export * from './theme';
// export * from './presets';
