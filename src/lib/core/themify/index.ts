import { NgModule } from '@angular/core';

import { FlxThemeService } from './theme.service';
import { ThemePresets } from './presets';

@NgModule({
  // imports: [FlxThemeService, ThemePresets],
  // exports: [FlxThemeService, ThemePresets],
  providers: [FlxThemeService, ThemePresets],
})
export class FlxThemeModule {}

export * from './theme.service';
export * from './presets';
