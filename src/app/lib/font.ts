import localFont from 'next/font/local'

export const gilroy = localFont({
    src: [
        {
            path : '../../../public/fonts/Gilroy-Light.otf',
            weight: "300",
        },
        {
            path : '../../../public/fonts/Gilroy-ExtraBold.otf',
            weight: "800",
        },
    ],
    variable: "--font-gilroy",
})