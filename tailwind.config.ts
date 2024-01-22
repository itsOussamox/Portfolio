import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['var(--font-gilroy)'],
      },
      colors: {
        blueOne: 'rgba(147, 250, 186, 1)',
        blueTwo: 'rgba(140, 238, 214, 1)',
        blueThree: 'rgba(130, 224, 249, 1)',
        bannerColor: 'rgba(23, 27, 34, 0.4)',
        menuBg: 'rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
export default config
