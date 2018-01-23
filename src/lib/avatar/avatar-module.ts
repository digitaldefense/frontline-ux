/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import {FlxAvatar} from './avatar';


@NgModule({
  imports: [CommonModule, MatIconModule],
  exports: [FlxAvatar],
  declarations: [FlxAvatar],
})
export class FlxAvatarModule {}
