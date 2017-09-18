import { ElementRef, Inject, Injectable, Optional, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

// import { THEME } from './theme.tmpl';
import { ThemePresets } from './presets';
import { PALETTE } from './palette';

const blackText = ['lightblue', 'cyan', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange',
  'gray', 'white'];
const whiteText = ['red', 'pink', 'purple', 'deeppurple', 'indigo', 'blue', 'teal', 'deeporange',
  'brown', 'bluegray', 'black'];
const themeColors = ['primary', 'primaryLight', 'primaryDark', 'accent', 'accentLight',
  'accentDark', 'danger', 'warning', 'success', 'muted'];

@Injectable()
export class FlxThemeService {
  private _theme: any;

  set theme(value: any) {
    this._theme = value;
    this.applyTheme();
  }
  get theme() {
    // if (this._theme == null) { this.set('light'); }
    return this._theme;
  }

  constructor(
    protected _themes: ThemePresets,
    private _element: ElementRef,
    private _renderer: Renderer2
  ) { }

  set(value: any | string) {
    if (typeof value === 'string') {
      this.theme = this._themes.getTheme(value);
    } else {
      this.theme = value;
    }

    this.applyTheme();
  }

  applyTheme() {
    const elem = this._element.nativeElement;
    const body = this._renderer.parentNode(elem);
    // const bgColor = this._theme.background;
    // const txtColor = this._theme.text;
    const base = this._theme.base;
    const accent = this._theme.accent;

    // this._renderer.setStyle(body, 'background-color', bgColor);
    // this._renderer.setStyle(body, 'color', txtColor);
    this._renderer.addClass(body, `flx-theme-${base}`);
    this._renderer.addClass(body, `flx-theme-selection-${accent[1]}`);
  }

  /** Apply both background and contrasting text color to element */
  applyColors(element: any, renderer: any, color: string) {
    if (color == null || !color.length) { return; }
    const elem = element.nativeElement;
    let cvs: string[];
    if (themeColors.indexOf(color) !== -1) {
      cvs = this.theme[color];
    } else {
      cvs = [PALETTE[color]['500'], color];
    }
    renderer.setStyle(elem, 'background-color', cvs[0]);
    renderer.setStyle(elem, 'color', PALETTE[cvs[1]]['text']);
  }

  /** Apply provided theme property as text color */
  applyColor(element: any, renderer: any, color: string) {
    if (color == null || !color.length) { return; }
    const elem = element.nativeElement;
    let cvs: string[];
    if (this._isCustomColor(color)) {
      cvs = [color];
    } else {
      if (themeColors.indexOf(color) !== -1) {
        cvs = this.theme[color];
      } else {
        cvs = [PALETTE[color]['500'], color];
      }
    }
    renderer.setStyle(elem, 'color', cvs[0]);
  }

  /** Apply provided theme property as background color */
  applyBgColor(element: any, renderer: any, color: string, reverseText?: boolean) {
    if (color == null || !color.length) { return; }
    const elem = element.nativeElement;
    let cvs: string[];
    if (this._isCustomColor(color)) {
      cvs = [color];
    } else {
      if (themeColors.indexOf(color) !== -1) {
        cvs = this.theme[color];
      } else {
        cvs = [PALETTE[color]['500'], color];
      }
    }
    renderer.setStyle(elem, 'background-color', cvs[0]);

    // const states = ['success', 'danger', 'warning'];
    // if (states.indexOf(color) !== -1) {
    //   renderer.setStyle(elem, 'color', '#fff');
    // } else if (reverseText) {
    //   renderer.setStyle(elem, 'color', this.theme[color + 'Text']);
    // }
  }

  getHexColor(value: string): string {
    let cv: string;
    if (themeColors.indexOf(value) !== -1) {
      cv = this.theme[value][0];
    } else {
      cv = PALETTE[value]['500'];
    }
    return cv;
  }

  getRgbColor(value: string): string {
    const hex = this.getHexColor(value);
    if (hex === undefined) { return ''; }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `${r}, ${g}, ${b}`;
  }

  getThemeColor(value: string): string {
    const color = this.theme[value];
    for (let prop in this.theme) {
      if (this.theme[prop] === color) {
        return prop;
      }
    }
    return '';
  }

  private _isCustomColor(color: string): boolean {
    return Boolean(color.charAt(0) === '#');
  }
}
