/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Constructor } from './constructor';

/** @docs-private */
export interface CanCollapse {
  isOpen: boolean;
  toggle();
}

/** Mixin to augment a directive with a `toggle` method. */
export function mixinCollapse<T extends Constructor<{}>>(base: T)
  : Constructor<CanCollapse> & T {
  return class extends base {
    private _isOpen: boolean = false;

    /** Whether the ripple effect is disabled or not. */
    get isOpen() { return this._isOpen; }
    set isOpen(value: any) { this._isOpen = coerceBooleanProperty(value); }

    constructor(...args: any[]) { super(...args); }

    /** Shows/hides the panel/dropdown */
    toggle(): void {
      console.log('mixinCollapse#toggle');
      // this._isTooltipVisible() ? this.hide() : this.show();
    }
  };
}
