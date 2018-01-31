/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { Directive, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[collapseTrigger]',
  host: {'(click)': '_onClick()'},
})
export class MatCollapseTrigger {
  @Input('collapseTrigger') target: HTMLElement;

  constructor(private _renderer: Renderer2) {}

  _onClick() {
    console.log('MatCollapseTrigger#_onClick', typeof this.target, this.target);
    this._toggle();
  }

  private _isCollapsed(): boolean {
    return this.target.classList.contains('d-none');
  }

  private _toggle(): void {
    this._isCollapsed() ? this._show() : this._hide();
  }

  private _hide(): void {
    this._renderer.addClass(this.target, 'd-none');
  }

  private _show(): void {
    this._renderer.removeClass(this.target, 'd-none');
  }
}
