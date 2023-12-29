import { type Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';
import animations from 'tailwindcss-animate';

export default {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
  },
  plugins: [
    animations,
    plugin(function ({ addUtilities }) {
      addUtilities({
        // https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode
        '.horizontal-writing-tb': { 'writing-mode': 'horizontal-tb' },
        '.vertical-writing-rl': { 'writing-mode': 'vertical-rl' },
        '.vertical-writing-lr': { 'writing-mode': 'vertical-lr' },
        // https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation
        '.orientation-mixed': { 'text-orientation': 'mixed' },
        '.orientation-upright': { 'text-orientation': 'upright' },
        '.orientation-sideways-right': { 'text-orientation': 'sideways-right' },
        '.orientation-sideways-left': { 'text-orientation': 'sideways' },
        '.orientation-sideways': { 'text-orientation': 'sideways' },
        '.orientation-glyph': { 'text-orientation': 'use-glyph-orientation' },
      });
    }),
  ],
} satisfies Config;
