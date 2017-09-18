import { Injectable } from '@angular/core';

import { THEME } from './theme.tmpl';
import { PALETTE } from './palette';

const black = '0, 0, 0';
const white = '255, 255, 255';

const black12 = `rgba(${black}, 0.12)`;
const white12 = `rgba(${white}, 0.12)`;
const white3 = `rgba(${white}, 0.3)`;

export const BaseThemes = {
    light: {
        success: [PALETTE.green['500'], 'green'],
        warning: [PALETTE.amber['500'], 'amber'],
        danger: [PALETTE.red['500'], 'red'],
        muted: [`rgba(${black}, 0.54)`, 'muted'],

        // statusbar: [PALETTE.gray['500'], 'gray'],
        // toolbar: [PALETTE.gray['100'], 'gray.100'],
        // body: [PALETTE.gray['50'], 'body'],
        // card: [white, 'white'],
        // dialog: [white, 'white'],
    },
    dark: {
        success: [PALETTE.green['500'], 'green'],
        warning: [PALETTE.amber['500'], 'amber'],
        danger: [PALETTE.red['500'], 'red'],
        muted: [`rgba(${white}, 0.6)`, 'muted'],

        // statusbar: [black, 'black'],
        // toolbar: [PALETTE.gray['900'], 'gray.900'],
        // body: ['#303030', 'body'],
        // card: [PALETTE.gray['800'], 'gray.800'],
        // dialog: [PALETTE.gray['800'], 'gray.800'],
    }
};

const blackText = ['lightblue', 'cyan', 'green', 'lightgreen', 'lime', 'yellow', 'amber', 'orange', 'gray', 'white'];
const whiteText = ['red', 'pink', 'purple', 'deeppurple', 'indigo', 'blue', 'teal', 'deeporange', 'brown', 'bluegray', 'black'];

@Injectable()
export class ThemePresets {
    private _preset = 'light';

    light: THEME = {
        name: 'light',
        base: 'light',
        primary: PALETTE.blue['500'],
        primaryLight: PALETTE.blue['300'],
        primaryDark: PALETTE.blue['800'],
        accent: PALETTE.pink['A200'],
        accentLight: PALETTE.pink['A100'],
        accentDark: PALETTE.pink['A400'],
        reversePrimary: true,
        reverseAccent: true
    };
    dark: THEME = {
        name: 'dark',
        base: 'dark',
        primary: PALETTE.blue['500'],
        primaryLight: PALETTE.blue['300'],
        primaryDark: PALETTE.blue['800'],
        accent: PALETTE.pink['A200'],
        accentLight: PALETTE.pink['A100'],
        accentDark: PALETTE.pink['A400'],
        reversePrimary: true,
        reverseAccent: true
    };

    getTheme(name: string) {
        let topcoat, base, theme;
        if (name === 'light' || name === 'dark') {
            topcoat = this[name];
            base = BaseThemes[topcoat.base];
        } else {
            const parts: string[] = name.split('-');
            const primary = parts[0];
            const accent = parts[1];
            const basePart = parts[2];
            topcoat = {
                'base': basePart || 'light',
                'primary': [PALETTE[primary]['500'], primary],
                // 'primaryText': PALETTE[primary]['text'],
                // 'primaryColor': primary,
                'primaryLight': [PALETTE[primary]['300'], primary],
                'primaryDark': [PALETTE[primary]['800'], primary],
                'accent': [PALETTE[accent]['A200'], accent],
                // 'accentText': PALETTE[accent]['text'],
                // 'accentColor': accent,
                'accentLight': [PALETTE[accent]['A100'], accent],
                'accentDark': [PALETTE[accent]['A400'], accent],
                // 'link': PALETTE[accent]['500'],
            };
            base = BaseThemes[basePart] || BaseThemes['light'];
        }

        theme = Object.assign({}, topcoat, base);
        return theme;
    }
}
