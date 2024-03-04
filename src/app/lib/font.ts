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
        {
            path : '../../../public/fonts/Gilroy-Bold.ttf',
            weight: "700",
        },
        {
            path : '../../../public/fonts/Gilroy-Regular.ttf',
            weight: "400",
        },
        {
            path : '../../../public/fonts/Gilroy-Medium.ttf',
            weight: "500",
        },
        {
            path : '../../../public/fonts/Gilroy-SemiBold.ttf',
            weight: "600",
        },
        {
            path : '../../../public/fonts/Gilroy-UltraLight.ttf',
            weight: "200",
        }
    ],
    variable: "--font-gilroy",
})