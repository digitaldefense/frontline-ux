/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Digital Defence. Inc. All Rights Reserved.
 * This is a proprietary addition to Google's Material Design for Angular
 */

import { Inject, Injectable, Optional } from '@angular/core';

export const flxPalette = {
  red: {
    '50': '#ffebee',
    '100': '#ffcdd2',
    '200': '#ef9a9a',
    '300': '#e57373',
    '400': '#ef5350',
    '500': '#f44336',
    '600': '#e53935',
    '700': '#d32f2f',
    '800': '#c62828',
    '900': '#b71c1c',
    'A100': '#ff8a80',
    'A200': '#ff5252',
    'A400': '#ff1744',
    'A700': '#d50000'
  },
  pink: {
    '50': '#fce4ec',
    '100': '#f8bbd0',
    '200': '#f48fb1',
    '300': '#f06292',
    '400': '#ec407a',
    '500': '#e91e63',
    '600': '#d81b60',
    '700': '#c2185b',
    '800': '#ad1457',
    '900': '#880e4f',
    'A100': '#ff80ab',
    'A200': '#ff4081',
    'A400': '#f50057',
    'A700': '#c51162'
  },
  purple: {
    '50': '#f3e5f5',
    '100': '#e1bee7',
    '200': '#ce93d8',
    '300': '#ba68c8',
    '400': '#ab47bc',
    '500': '#9c27b0',
    '600': '#8e24aa',
    '700': '#7b1fa2',
    '800': '#6a1b9a',
    '900': '#4a148c',
    'A100': '#ea80fc',
    'A200': '#e040fb',
    'A400': '#d500f9',
    'A700': '#aa00ff'
  },
  deepPurple: {
    '50': '#ede7f6',
    '100': '#d1c4e9',
    '200': '#b39ddb',
    '300': '#9575cd',
    '400': '#7e57c2',
    '500': '#673ab7',
    '600': '#5e35b1',
    '700': '#512da8',
    '800': '#4527a0',
    '900': '#311b92',
    'A100': '#b388ff',
    'A200': '#7c4dff',
    'A400': '#651fff',
    'A700': '#6200ea'
  },
  indigo: {
    '50': '#e8eaf6',
    '100': '#c5cae9',
    '200': '#9fa8da',
    '300': '#7986cb',
    '400': '#5c6bc0',
    '500': '#3f51b5',
    '600': '#3949ab',
    '700': '#303f9f',
    '800': '#283593',
    '900': '#1a237e',
    'A100': '#8c9eff',
    'A200': '#536dfe',
    'A400': '#3d5afe',
    'A700': '#304ffe'
  },
  blue: {
    '50': '#e3f2fd',
    '100': '#bbdefb',
    '200': '#90caf9',
    '300': '#64b5f6',
    '400': '#42a5f5',
    '500': '#2196f3',
    '600': '#1e88e5',
    '700': '#1976d2',
    '800': '#1565c0',
    '900': '#0d47a1',
    'A100': '#82b1ff',
    'A200': '#448aff',
    'A400': '#2979ff',
    'A700': '#2962ff'
  },
  lightBlue: {
    '300': '#4FC3F7',
    '500': '#03A9F4',
    '800': '#0277BD',
    'A100': '#80D8FF',
    'A200': '#40C4FF',
    'A400': '#00B0FF'
  },
  cyan: {
    '500': '#00BCD4',
    'A100': '#84FFFF',
    'A200': '#18FFFF',
    'A400': '#00E5FF'
  },
  teal: {
    '300': '#4DB6AC',
    '500': '#009688',
    '800': '#00695C',
    'A100': '#A7FFEB',
    'A200': '#64FFDA',
    'A400': '#1DE9B6'
  },
  green: {
    '50': '#e8f5e9',
    '100': '#c8e6c9',
    '200': '#a5d6a7',
    '300': '#81c784',
    '400': '#66bb6a',
    '500': '#4caf50',
    '600': '#43a047',
    '700': '#388e3c',
    '800': '#2e7d32',
    '900': '#1b5e20',
    'A100': '#b9f6ca',
    'A200': '#69f0ae',
    'A400': '#00e676',
    'A700': '#00c853'
  },
  lightGreen: {
    '500': '#8BC34A',
    'A100': '#CCFF90',
    'A200': '#B2FF59',
    'A400': '#76FF03'
  },
  lime: {
    '500': '#CDDC39',
    'A100': '#F4FF81',
    'A200': '#EEFF41',
    'A400': '#C6FF00'
  },
  yellow: {
    '500': '#FFEB3B',
    'A100': '#FFFF8D',
    'A200': '#FFFF00',
    'A400': '#FFEA00'
  },
  amber: {
    '50': '#fff8e1',
    '100': '#ffecb3',
    '200': '#ffe082',
    '300': '#ffd54f',
    '400': '#ffca28',
    '500': '#ffc107',
    '600': '#ffb300',
    '700': '#ffa000',
    '800': '#ff8f00',
    '900': '#ff6f00',
    'A100': '#ffe57f',
    'A200': '#ffd740',
    'A400': '#ffc400',
    'A700': '#ffab00'
  },
  orange: {
    '500': '#FF9800',
    'A100': '#FFD180',
    'A200': '#FFAB40',
    'A400': '#FF9100'
  },
  deepOrange: {
    '500': '#FF5722',
    'A100': '#FF9E80',
    'A200': '#FF6E40',
    'A400': '#FF3D00'
  },
  brown: {
    '500': '#795548',
    'A100': '#BCAAA4',
    'A200': '#8D6E63',
    'A400': '#6D4C41'
  },
  gray: {
    '0': '#ffffff',
    '50': '#fafafa',
    '100': '#f5f5f5',
    '200': '#eeeeee',
    '300': '#e0e0e0',
    '400': '#bdbdbd',
    '500': '#9e9e9e',
    '600': '#757575',
    '700': '#616161',
    '800': '#424242',
    '900': '#212121',
    '1000': '#000000',
    'A100': '#ffffff',
    'A200': '#eeeeee',
    'A400': '#bdbdbd',
    'A700': '#616161'
  },
  blueGray: {
    '50': '#eceff1',
    '100': '#cfd8dc',
    '200': '#b0bec5',
    '300': '#90a4ae',
    '400': '#78909c',
    '500': '#607d8b',
    '600': '#546e7a',
    '700': '#455a64',
    '800': '#37474f',
    '900': '#263238',
    'A100': '#cfd8dc',
    'A200': '#b0bec5',
    'A400': '#78909c',
    'A700': '#455a64'
  }
};

const white = '#fff';
const black = '#000';

const contrastMap = {
  red: ['400', 'A200'],
  pink: ['400', 'A200'],
  purple: ['300', 'A200'],
  deepPurple: ['300', 'A200'],
  indigo: ['300', 'A200'],
  blue: ['600', 'A200'],
  lightBlue: ['700', 'A700'],
  cyan: ['700', '0'],
  teal: ['500', '0'],
  green: ['600', '0'],
  lightGreen: ['800', '0'],
  lime: ['500', '0'],
  yellow: ['0', '0'],
  amber: ['0', '0'],
  orange: ['900', '0'],
  deepOrange: ['600', 'A400'],
  brown: ['300', '0'],
  gray: ['600', '0'],
  blueGray: ['400', '0'],
};

const basecoats = {
  light: {
    background: flxPalette.gray['50'],
    highlight: flxPalette.gray['300'],
    text: `rgba(0,0,0, 0.87)`,
  },
  dark: {
    background: '#303030',
    highlight: flxPalette.gray['800'],
    text: 'white',
  }
};

@Injectable()
export class FlxTheme {
  name: string;
  domain: 'light' | 'dark' | string;
  background: string;
  text: string;
  primary: string;
  primaryDark: string;
  primaryLight: string;
  primaryContrast: string;
  accent: string;
  accentDark: string;
  accentLight: string;
  accentContrast: string;
  link: string;
  highlight: string;

  constructor(name: string) {
    this.name = name;
    this._parseNameParts(name);
  }

  private _parseNameParts(name: string) {
    if (name === 'light' || name === 'dark') {
      this.domain = this[name];
      this._generateTopCoat('blueGray', 'blue');
    } else {
      const parts: string[] = name.split('-');
      const primary = parts[0];
      const accent = parts[1];
      this.domain = parts[2];
      this._generateTopCoat(primary, accent);
    }
    this._generateBaseCoat(this.domain);
  }

  private _generateBaseCoat(domain) {
    this.background = basecoats[domain].background;
    this.text = basecoats[domain].text;
    this.highlight = basecoats[domain].highlight;
  }

  private _generateTopCoat(primary, accent) {
    this.primary = flxPalette[primary]['500'];
    this.primaryLight = flxPalette[primary]['300'];
    this.primaryDark = flxPalette[primary]['800'];
    this.primaryContrast = this._generateContrastLayer('primary', primary);
    this.accent = flxPalette[accent]['A200'];
    this.accentLight = flxPalette[accent]['A100'];
    this.accentDark = flxPalette[accent]['A400'];
    this.accentContrast = this._generateContrastLayer('accent', accent);
    this.link = flxPalette[accent]['A200'];
  }

  private _generateContrastLayer(theme, color): string {
    const val: string = (theme === 'primary') ? contrastMap[color][0] : contrastMap[color][1];
    return (this._parseColorValue(val) >= 500) ? white : black;
  }

  private _parseColorValue(color: string): number {
    return (color.charAt(0) === 'A') ? parseInt(color.substr(1), 10) : parseInt(color, 10);
  }
}
